import { Coffee, Wallet, Armchair, Users } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  {
    icon: Coffee,
    title: 'Biji Kopi Pilihan',
    description:
      'Menggunakan kopi pilihan untuk menghasilkan rasa yang konsisten.',
  },
  {
    icon: Wallet,
    title: 'Harga Bersahabat',
    description:
      'Menu berkualitas dengan harga yang tetap nyaman di kantong.',
  },
  {
    icon: Armchair,
    title: 'Tempat Nyaman',
    description:
      'Suasana hangat untuk ngobrol, belajar, bekerja, atau sekadar santai.',
  },
  {
    icon: Users,
    title: 'Cocok untuk Semua Momen',
    description:
      'Tempat yang nyaman untuk nongkrong bersama teman maupun menikmati waktu sendiri.',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-cream-50">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-12 md:mb-16`}
        >
          <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3 block">
            Kenapa Kopi Senja
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-800">
            Alasan Memilih Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Coffee;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group flex flex-col items-start p-6 md:p-8 rounded-3xl bg-cream-100 border border-cream-300/40 hover:border-amber-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-coffee-900/5`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-coffee-800 text-cream-50 mb-5 group-hover:bg-amber-500 group-hover:text-coffee-900 transition-colors duration-500">
        <Icon className="w-7 h-7" strokeWidth={1.8} />
      </div>
      <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-3">
        {title}
      </h3>
      <p className="text-sm text-coffee-500 leading-relaxed">{description}</p>
    </div>
  );
}
