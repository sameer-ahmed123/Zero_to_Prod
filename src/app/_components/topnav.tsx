import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import {SimpleUploadButton} from "./simple-upload-button";

export function TopNav() {
  
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {/* This button will only render if the user is signed in */}
        <SignedIn>
          <SimpleUploadButton  />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
