import { SignedIn, SignedOut } from "@clerk/nextjs";
export const dynamic = "force-dynamic"; // This is to ensure the page is always dynamic and not cached
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      
        {images.map((image, index) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Link href={`/img/${image.id}`}  >
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "fill" }}
              width={192}
              height={192}
            />
            </Link>
            <div>{image.name}</div>
          </div>
        ))}
      
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          {" "}
          Please Sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
