import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { arrayBuffer } from "stream/consumers";
// import { Inngest } from "inngest";
import { inngest } from "@/inngest/client";

export async function POST(req:NextRequest) {
    const formData = await req.formData()
    const refImage = formData.get('RefImg') as File | null;;
    const faceImage = formData.get('FaceImg') as File | null;
    const userInput = formData.get('userInput');
    const user = await currentUser();

    const inputData = {
        userInput: userInput,
        refImage: refImage ? await getFileBUfferData(refImage): null,
        faceImage : faceImage ? await getFileBUfferData(faceImage): null,
        userEmail : user?.primaryEmailAddress?.emailAddress
    }

    const result = await inngest.send({
    name: "ai/generate-thumbnail",
    data: inputData
  });

  return NextResponse.json({result})
}


const getFileBUfferData = async(file:File)=>{
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return {
            name:file.name,
            file: file.type,
            size: file.size,
            buffer: buffer.toString('base64')
        }
    }