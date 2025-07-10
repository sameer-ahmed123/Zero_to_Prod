import { getImageById } from "~/server/queries";
import { Modal } from "../modal"; // Ensure this path is correct based on your file structure
import FullPageImageView from "~/components/full-image-page";

/**
 * PhotoModal component to display an image in a modal.
 * This is an async Server Component, which fetches image data
 * based on the 'id' from the route parameters.
 *
 * @param {object} props - The component props.
 * @param {object} props.params - The route parameters, which must be awaited.
 * @param {string} props.params.id - The ID of the photo to display.
 */
export default async function PhotoModal({
  params, // Access the entire params object first
}: {
  params: { id: string };
}) {
  // Await the params object before destructuring its properties.
  // This is a Next.js App Router requirement for async Server Components
  // to ensure dynamic route segments are fully resolved.
  const { id: photoId } = await params;

  // Convert the photoId string to a number for your query.
  const pic_id = Number(photoId);

  // Fetch the image data from your server queries.
  const image = await getImageById(pic_id);

  // Render the Modal component with the image.
  // Ensure the Modal component is marked with 'use client';
  // as it uses client-side hooks like useRouter and createPortal.
  return (
    <Modal>
      {/* Display the image using the fetched URL */}
      <FullPageImageView id={pic_id}/>
    </Modal>
  );
}
