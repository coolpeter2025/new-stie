import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.src} className="overflow-hidden rounded-3xl border border-latte/40">
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={600}
            className="h-56 w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
