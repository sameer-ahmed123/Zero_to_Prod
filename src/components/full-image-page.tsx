import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name || "Image"} // Add a descriptive alt text for accessibility
          className="flex-shrink object-contain" // Added some Tailwind classes for better visuals
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l ">
        <div className="text-xl font-bold">{image.name}</div>
        <div></div>
      </div>
    </div>
  );
}
