"use client";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../../utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {/* This button will only render if the user is signed in */}
        <SignedIn>
          <UploadButton endpoint="imageUploader"  onClientUploadComplete={()=>{
            router.refresh();
          }}/>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
