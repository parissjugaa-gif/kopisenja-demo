import { galleryImages, type GalleryImage } from '@/data/gallery';
import { useReveal } from '@/hooks/useReveal';

function GalleryItem({
  image,
  index,
  featured = false,
}: {
  image: GalleryImage;
  index: number;
  featured?: boolean;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl ${
        featured
          ? 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2'
          : 'col-span-1 row-span-1'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-coffee-900/0 group-hover:bg-coffee-900/30 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-sm text-cream-50 font-medium leading-snug">
          {image.alt}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="galeri" className="section-py bg-cream-50">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-10 md:mb-14`}
        >
          <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3 block">
            Galeri
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-800 mb-4">
            Suasana di Kopi Senja
          </h2>
          <p className="text-base text-coffee-500 leading-relaxed">
            Setiap sudut punya cerita. Lihat bagaimana hangatnya waktu di sini.
          </p>
        </div>

        {/* Mobile: 2-col equal grid / Tablet & Desktop: 3-col editorial with featured */}
        <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[220px] gap-3 sm:gap-4">
          {galleryImages.map((image, i) => (
            <GalleryItem
              key={i}
              image={image}
              index={i}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
