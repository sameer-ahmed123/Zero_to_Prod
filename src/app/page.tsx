import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://mwwq3m28t9.ufs.sh/f/Mb0fnSTJI70uPerCk2VcD8jYlCw6N4GFkHsVS0IdT7LObozK",
    "https://mwwq3m28t9.ufs.sh/f/Mb0fnSTJI70uWShPSYj9NmVLIr7X1huBKbA6yl0DgGewUsiO",
    "https://mwwq3m28t9.ufs.sh/f/Mb0fnSTJI70uymL6PP2KJq0CbUmHMXuSdlW45Y2j9gEeKPsG",
    "https://mwwq3m28t9.ufs.sh/f/Mb0fnSTJI70uZx4kAfQAHvMtIzyafbLhgWJ9VKdOp3B7Fxm8",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
