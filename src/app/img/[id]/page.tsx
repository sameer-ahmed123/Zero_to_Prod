import FullPageImageView from "~/components/full-image-page";
import { getImageById } from "~/server/queries";

export default async function PhotoPage({
  params, // Access the entire params object first
}: {
  params: { id: string };
}) {
  const { id: photoId } = await params;

  const pic_id = Number(photoId);

  const image = await getImageById(pic_id);

  return <FullPageImageView id={pic_id} />;
}
