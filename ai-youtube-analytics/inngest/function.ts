import { inngest } from "./client";
import ImageKit from 'imagekit';; 
import OpenAI from 'openai';


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

  //@ts-ignore

const imagekit = new ImageKit({
  //@ts-ignore
  
publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
  //@ts-ignore

privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
  //@ts-ignore

urlEndpoint:process.env.IMAGEKIT_URLENDPOINT,
})

export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
 
});

export const GenerateAiThumbnail = inngest.createFunction(
  {id: 'ai/generate-thumbnail'},
  {event:'ai/generate-thumbnail'},
  async ({ event, step }) => {
        const {userEmail,refImage,userInput,faceImage} = await event.data
        //upload image to cloud // imagekit

        const uploadImageUrls =  await step.run(
          "UploadImage",
          async()=>{
         
            if(refImage!=null){

            

              const refImageUrl =  await imagekit.upload({
                file:refImage?.buffer??'',
                fileName:refImage.name,
                isPublished:true,
                useUniqueFileName:false
  
  
              })
              // const faceImageUrl =  await imagekit.upload({
              //   file:faceImage?.buffer??'',
              //   fileName:faceImage.name,
              //   isPublished:true,
              //   useUniqueFileName:false
  
  
              // })
  
              return refImageUrl.url
             
                // faceImageUrl:faceImageUrl.url,
  
            }else{
              return null
            }
            
          
          }
        )

        // generate ai prompt from ai model 

          const generateThumbnailPrompt= await step.run('generateThumnailPrompt',async()=>{
            const completion = await openai.chat.completions.create({
    model: 'google/gemini-2.5-flash',
    messages: [
      {
        role: 'user',
        content: uploadImageUrls? [
              {
                "type": "text",
                "text": `Referring to this thumbnail URL, write a text prompt to generate a YouTube thumbnail similar to the attached reference image with the following user input `+userInput+'Only give me text prompt, no other comment text'
              },
              {
                "type": "image_url",
                "image_url": { "url": uploadImageUrls }
              }
            ]
          : [
              {
                "type": "text",
                "text": `Depends on user input, write a text prompt to generate a high-quality professional YouTube thumbnail prompt. Add relevant icons, illustrations, or images as per the title. UserInput `+userInput+'Only give me text prompt, no other comment text'
              }
            ]
          
      },
    ],
    max_tokens:500
  });

  console.log(completion.choices[0].message.content)
 return completion.choices[0].message.content

          })

        //generate ai image

        //save iamge to cloud

        //save record to databse
        return generateThumbnailPrompt
  }
)