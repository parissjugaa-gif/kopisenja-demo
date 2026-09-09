import { Quote } from 'lucide-react';
import { testimonials, type Testimonial } from '@/data/testimonials';
import { useReveal } from '@/hooks/useReveal';

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} flex flex-col p-6 md:p-8 rounded-3xl bg-cream-50 border border-cream-300/50 shadow-sm hover:shadow-lg hover:shadow-coffee-900/5 transition-all duration-500`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote className="w-8 h-8 text-amber-400 mb-4" strokeWidth={1.5} />
      <p className="text-base text-coffee-600 leading-relaxed flex-1 mb-6">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-cream-300/50">
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-coffee-800 text-cream-50 font-serif text-lg font-semibold">
          {testimonial.initial}
        </div>
        <div>
          <div className="font-semibold text-coffee-800 text-sm">
            {testimonial.name}
          </div>
          <div className="text-sm text-coffee-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-cream-100">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-12 md:mb-16`}
        >
          <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3 block">
            Kata Mereka
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-800">
            Apa Kata Pelanggan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
