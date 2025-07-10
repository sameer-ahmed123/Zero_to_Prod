import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: {id:number}) {
  const image = await getImageById(props.id);
  return (
    <img
      src={image.url}
      alt={image.name || "Image"} // Add a descriptive alt text for accessibility
      className="w-96 rounded-lg shadow-lg" // Added some Tailwind classes for better visuals
    />
  );
}
