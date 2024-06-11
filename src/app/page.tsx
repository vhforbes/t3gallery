import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const mockImgUrls = [
    "https://utfs.io/f/aa65dff5-e349-4f07-9ad9-557651d00f3b-6i8wda.36.02.jpeg",
    "https://utfs.io/f/e582717e-14ac-40a7-a6e5-a3be186471da-j9udsk.png",
    "https://utfs.io/f/c967489a-dd85-43b8-b75f-0dab14d86237-juwruj.png",
  ];

  const mockImages = mockImgUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img alt="image" src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
