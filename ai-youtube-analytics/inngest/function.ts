import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);


export const GenerateAiThumbnail = inngest.createFunction(
  {id: 'ai/generate-thumbnail'},
  {event:'ai/generate-thumbnail'},
  async ({ event, step }) => {
        const {userEmail,refImage,userInput,faceImage} = await event.data
        //upload image to cloud // imagekit

        // generate ai prompt from ai model 

        //generate ai image

        //save iamge to cloud

        //save record to databse
        return userEmail
  }
)