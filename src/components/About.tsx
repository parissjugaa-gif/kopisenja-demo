import { useReveal } from '@/hooks/useReveal';

const aboutImage =
  'https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1000';

export default function About() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="tentang" className="section-py bg-cream-100">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
        >
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] shadow-xl shadow-coffee-900/10">
              <img
                src={aboutImage}
                alt="Interior Kopi Senja dengan pencahayaan hangat dan dekorasi rustic"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 w-28 h-28 rounded-2xl bg-amber-500 -z-10 hidden sm:block" />
            <div className="absolute -top-5 -left-3 sm:-left-5 w-20 h-20 rounded-full border-2 border-coffee-200 -z-10 hidden sm:block" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3 block">
              Cerita Kami
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-800 mb-6 leading-tight">
              Tentang Kopi Senja
            </h2>
            <div className="space-y-4 text-base text-coffee-600 leading-relaxed">
              <p>
                Kopi Senja lahir dari kecintaan pada kopi dan kehangatan suasana
                Cirebon. Berlokasi di jantung Kota Cirebon, kami hadir sebagai
                tempat untuk menikmati kopi berkualitas, makanan pilihan, dan
                obrolan yang menyenangkan.
              </p>
              <p>
                Setiap cangkir kopi kami racik dengan biji pilihan, disajikan
                dalam suasana yang nyaman untuk belajar, bekerja, atau sekadar
                bersantai. Di Kopi Senja, setiap momen terasa lebih hangat.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-cream-300/60">
              <div>
                <div className="font-serif text-3xl font-bold text-coffee-800">
                  20+
                </div>
                <div className="text-sm text-coffee-500 mt-1">Menu Pilihan</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-coffee-800">
                  09–22
                </div>
                <div className="text-sm text-coffee-500 mt-1">Buka Tiap Hari</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-coffee-800">
                  100%
                </div>
                <div className="text-sm text-coffee-500 mt-1">Rasa Hangat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
