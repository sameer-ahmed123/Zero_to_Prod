import { getImageById } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const pic_id = Number(photoId);
  const image = await getImageById(pic_id);
  return (
    <div>
      <img src={image.url} alt="" className="w-96" />
    </div>
  );
}
