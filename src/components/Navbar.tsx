import { useEffect, useState } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { DEFAULT_WHATSAPP_LINK } from '@/lib/whatsapp';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Menu', href: '#menu' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Lokasi', href: '#lokasi' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(61,40,23,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl" aria-label="Navigasi utama">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-2 group"
            aria-label="Kopi Senja - Beranda"
          >
            <span
              className={`flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-300 ${
                scrolled ? 'bg-coffee-800' : 'bg-coffee-800/90'
              }`}
            >
              <Coffee className="w-5 h-5 text-cream-50" strokeWidth={2} />
            </span>
            <span
              className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-coffee-800' : 'text-coffee-800'
              }`}
            >
              Kopi Senja
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-coffee-700 hover:text-coffee-900 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={DEFAULT_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-coffee-800 text-cream-50 text-sm font-semibold hover:bg-coffee-900 transition-all duration-300 hover:shadow-lg hover:shadow-coffee-800/20 active:scale-95"
          >
            Pesan Sekarang
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-coffee-800 hover:bg-cream-200 transition-colors"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-cream-50 transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col px-5 py-8 gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-coffee-800 py-3 border-b border-cream-300/60 hover:text-amber-600 transition-colors"
              style={{
                animation: menuOpen
                  ? `fade-in-up 0.4s ease-out ${i * 0.06}s both`
                  : 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={DEFAULT_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-coffee-800 text-cream-50 text-base font-semibold hover:bg-coffee-900 transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
