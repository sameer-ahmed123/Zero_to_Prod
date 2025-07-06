import Link from "next/link";
import { db } from "../server/db";
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  const mockUrls = [
    "https://mwwq3m28t9.ufs.sh/f/Mb0fnSTJI70uPerCk2VcD8jYlCw6N4GFkHsVS0IdT7LObozK",
    "https://mwwq3m28t9.ufs.sh/f/Mb0fnSTJI70uWShPSYj9NmVLIr7X1huBKbA6yl0DgGewUsiO",
    "https://mwwq3m28t9.ufs.sh/f/Mb0fnSTJI70uymL6PP2KJq0CbUmHMXuSdlW45Y2j9gEeKPsG",
    "https://mwwq3m28t9.ufs.sh/f/Mb0fnSTJI70uZx4kAfQAHvMtIzyafbLhgWJ9VKdOp3B7Fxm8",
  ];

  // console.log(posts);
  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-"+ index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
