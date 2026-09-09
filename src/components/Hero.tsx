import { ArrowRight, MapPin } from 'lucide-react';
import { DEFAULT_WHATSAPP_LINK } from '@/lib/whatsapp';

const heroImage =
  'https://images.pexels.com/photos/18150815/pexels-photo-18150815.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Suasana hangat Kopi Senja di malam hari dengan pelanggan menikmati kopi"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/85 via-coffee-900/60 to-coffee-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-px mx-auto max-w-7xl w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Demo badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-50/10 backdrop-blur-sm border border-cream-50/20 mb-6 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-medium tracking-wider text-cream-100 uppercase">
              Demo Website — Portfolio
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream-50 leading-[1.1] mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Temukan Rasa,
            <br />
            Nikmati Senja.
          </h1>

          {/* Supporting text */}
          <p
            className="text-base sm:text-lg text-cream-200 leading-relaxed mb-8 max-w-xl animate-fade-in-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Kopi berkualitas, makanan pilihan, dan suasana nyaman untuk
            menemani setiap momen di Cirebon.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <a
              href={DEFAULT_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-amber-500 text-coffee-900 font-semibold text-base hover:bg-amber-400 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95"
            >
              Pesan via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-cream-50/10 backdrop-blur-sm border border-cream-50/30 text-cream-50 font-semibold text-base hover:bg-cream-50/20 transition-all duration-300 active:scale-95"
            >
              Lihat Menu
            </a>
          </div>

          {/* Location hint */}
          <div
            className="flex items-center gap-2 mt-10 text-cream-300 text-sm animate-fade-in-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Kejaksan, Kota Cirebon, Jawa Barat</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-cream-200/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream-200/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
