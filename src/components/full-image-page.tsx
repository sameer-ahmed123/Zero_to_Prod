import { clerkClient } from "@clerk/nextjs/server";
import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  const clerkInstance = await clerkClient();
  const uploaderinfo = await clerkInstance.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name || "Image"} // Add a descriptive alt text for accessibility
          className="flex-shrink object-contain" 
          // Added some Tailwind classes for better visuals
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col  border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span> uploaded by:</span>
          <span>{uploaderinfo.fullName}</span>
        </div>

        <div className="flex flex-col p-2">
          <span> Created on:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
