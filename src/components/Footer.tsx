import { Coffee, Instagram, Music, MessageCircle, MapPin, Clock } from 'lucide-react';
import { DEFAULT_WHATSAPP_LINK } from '@/lib/whatsapp';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Menu', href: '#menu' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Lokasi', href: '#lokasi' },
];

const socials = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'TikTok', href: '#', icon: Music },
  { label: 'WhatsApp', href: DEFAULT_WHATSAPP_LINK, icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-cream-200">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500">
                <Coffee className="w-5 h-5 text-coffee-900" strokeWidth={2} />
              </span>
              <span className="font-serif text-xl font-bold text-cream-50">
                Kopi Senja
              </span>
            </div>
            <p className="text-sm text-cream-300 leading-relaxed mb-5">
              Coffee shop & casual dining di Cirebon. Kopi berkualitas, makanan
              pilihan, dan suasana hangat untuk menemani setiap momenmu.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    social.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-coffee-800 hover:bg-amber-500 hover:text-coffee-900 text-cream-200 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-semibold text-cream-50 mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="font-serif text-base font-semibold text-cream-50 mb-4">
              Lokasi & Jam Buka
            </h3>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-cream-300 leading-relaxed">
                Kejaksan, Kota Cirebon
                <br />
                Jawa Barat, Indonesia
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-cream-300 space-y-1">
                <p>Senin–Jumat: 09.00–22.00</p>
                <p>Sabtu–Minggu: 08.00–23.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-coffee-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm text-cream-400">
            &copy; 2026 Kopi Senja. All rights reserved.
          </p>
          <p className="text-xs text-cream-500 tracking-wide">
            Demo Website — Portfolio Project
          </p>
        </div>
      </div>
    </footer>
  );
}
