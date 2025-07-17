import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {auth, clerkClient} from "@clerk/nextjs/server";
import { images } from "~/server/db/schema";
import { db } from "~/server/db";
import { ratelimit } from "~/server/ratelimit";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 20,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth();
      if (!user.userId) throw new UploadThingError("Unauthorized");

      const client = await clerkClient();
      const fulluserdata = await client.users.getUser(user.userId);

      if (fulluserdata?.privateMetadata?.['can-upload'] !== true){
        throw new UploadThingError("You are not allowed to upload files");
      }

      const { success } = await ratelimit.limit(user.userId);

      if (!success) {
        throw new UploadThingError("Rate limit exceeded");
      }
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      if (!metadata.userId) {
        throw new Error("User ID not found");
      }

      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      })

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
