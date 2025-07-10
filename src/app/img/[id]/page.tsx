import FullPageImageView from "~/components/full-image-page";
// The getImageById import is not directly used in this component's render logic
// because FullPageImageView is responsible for fetching the image.
// However, if FullPageImageView were also a Server Component, you might
// pass the 'image' object directly after fetching it here.
// import { getImageById } from "~/server/queries";

/**
 * PhotoModal component, now an async Server Component,
 * which correctly awaits the 'params' object before accessing its properties.
 * This is a requirement in Next.js App Router for async components
 * to ensure dynamic route segments are fully resolved.
 *
 * @param {object} props - The component props.
 * @param {object} props.params - The route parameters object.
 * @param {string} props.params.id - The ID of the photo to display.
 */
export default async function PhotoModal({
  params, // Accept the entire params object
}: {
  params: { id: string };
}) {
  // Await the params object before destructuring its properties.
  // This resolves the Next.js "params should be awaited" error.
  const { id: photoId } = await params;

  // Convert the photoId string to a number, as expected by FullPageImageView.
  const numericPhotoId = Number(photoId);

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullPageImageView id={numericPhotoId} />
    </div>
  );
}
