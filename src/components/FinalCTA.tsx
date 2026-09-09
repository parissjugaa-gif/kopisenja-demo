import { ArrowRight } from 'lucide-react';
import { DEFAULT_WHATSAPP_LINK } from '@/lib/whatsapp';
import { useReveal } from '@/hooks/useReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-cream-100">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} relative overflow-hidden rounded-3xl bg-coffee-800 px-6 py-16 md:px-16 md:py-20 text-center`}
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-900/40 via-transparent to-amber-500/10 pointer-events-none" />

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-5 leading-tight">
              Ngopi enak nggak harus ribet.
            </h2>
            <p className="text-base sm:text-lg text-cream-200 leading-relaxed mb-8">
              Temukan menu favoritmu dan pesan langsung lewat WhatsApp.
            </p>
            <a
              href={DEFAULT_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-coffee-900 font-semibold text-base hover:bg-amber-400 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95"
            >
              Pesan Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
