import { Modal } from "../modal"; // Ensure this path is correct based on your file structure
import FullPageImageView from "~/components/full-image-page";
/**
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
    <Modal>
      <FullPageImageView id={numericPhotoId} />
    </Modal>
  );
}
