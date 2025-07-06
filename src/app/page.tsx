
import { db } from "../server/db";
export const dynamic = "force-dynamic"; // This is to ensure the page is always dynamic and not cached

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(model,{desc}) => desc(model.createdAt),
  });


  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
       
        {[...images, ...images].map((image, index) => (
          <div key={image.id + "-"+ index} className="w-48 flex flex-col">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
