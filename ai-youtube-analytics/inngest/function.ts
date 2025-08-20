import { inngest } from "./client";
import ImageKit from 'imagekit' 

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
  
              return {
                refImageUrl:refImageUrl.url,
                // faceImageUrl:faceImageUrl.url,
  
              }
            }else{
              return null
            }
          }
        )

        // generate ai prompt from ai model 

        //generate ai image

        //save iamge to cloud

        //save record to databse
        return uploadImageUrls
  }
)