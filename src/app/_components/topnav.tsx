import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {/* This button will only render if the user is signed in */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
