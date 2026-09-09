import { useReveal } from '@/hooks/useReveal';
import { menuItems, formatPrice, type MenuItem } from '@/data/menu';
import { whatsappLink } from '@/lib/whatsapp';

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group flex flex-col bg-cream-50 rounded-3xl overflow-hidden border border-cream-300/50 shadow-sm hover:shadow-xl hover:shadow-coffee-900/8 transition-all duration-500 hover:-translate-y-1`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-coffee-500 leading-relaxed mb-4 flex-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-coffee-900">
            {formatPrice(item.price)}
          </span>
          <a
            href={whatsappLink(
              `Halo Kopi Senja, saya ingin memesan:\n1x ${item.name} — ${formatPrice(item.price)}`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-full bg-coffee-800 text-cream-50 text-sm font-semibold hover:bg-coffee-900 transition-all duration-300 active:scale-95 hover:shadow-md"
            aria-label={`Pesan ${item.name}`}
          >
            Pesan
          </a>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedMenu() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="menu" className="section-py bg-cream-100">
      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-12 md:mb-16`}
        >
          <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3 block">
            Menu Pilihan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-800 mb-4">
            Favorit di Kopi Senja
          </h2>
          <p className="text-base text-coffee-500 leading-relaxed">
            Dari kopi klasik hingga hidangan mengenyangkan, semua dibuat dengan
            bahan pilihan untuk menemani senjamu.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {menuItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
