import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

// Kejaksan, Kota Cirebon coordinates
const LAT = -6.7320;
const LNG = 108.5530;

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Kejaksan%2C%20Kota%20Cirebon%2C%20Jawa%20Barat%2C%20Indonesia';

function createCustomIcon() {
  return L.divIcon({
    html: `<div class="custom-marker" style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#3D2817;border:3px solid #C8964F;box-shadow:0 4px 12px rgba(42,27,16,0.4);">
      <div style="transform:rotate(45deg);width:10px;height:10px;border-radius:50%;background:#FAF6EF;"></div>
    </div>`,
    className: '',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });
}

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [LAT, LNG],
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const marker = L.marker([LAT, LNG], { icon: createCustomIcon() }).addTo(map);

    marker.bindPopup(
      '<div style="text-align:center;"><strong style="font-size:14px;color:#3D2817;">Kopi Senja</strong><br/><span style="font-size:12px;color:#7A5638;">Kejaksan, Kota Cirebon</span></div>'
    );

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section id="lokasi" className="section-py bg-cream-50">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-12 md:mb-16`}
        >
          <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3 block">
            Lokasi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-800 mb-4">
            Temukan Kami
          </h2>
          <p className="text-base text-coffee-500 leading-relaxed">
            Mudah dijangkau di pusat Kota Cirebon, datang dan nikmati senjamu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3">
            <div
              ref={mapRef}
              className="w-full h-[320px] sm:h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg shadow-coffee-900/10 border border-cream-300/50"
              aria-label="Peta lokasi Kopi Senja di Kejaksan, Cirebon"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address card */}
            <div className="flex items-start gap-4 p-6 rounded-3xl bg-cream-100 border border-cream-300/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-coffee-800 text-cream-50 flex-shrink-0">
                <MapPin className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-coffee-800 mb-1">
                  Alamat
                </h3>
                <p className="text-sm text-coffee-500 leading-relaxed">
                  Kejaksan, Kota Cirebon
                  <br />
                  Jawa Barat, Indonesia
                </p>
              </div>
            </div>

            {/* Hours card */}
            <div className="flex items-start gap-4 p-6 rounded-3xl bg-cream-100 border border-cream-300/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-coffee-800 text-cream-50 flex-shrink-0">
                <Clock className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-coffee-800 mb-2">
                  Jam Buka
                </h3>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-coffee-500">Senin–Jumat</span>
                    <span className="text-coffee-800 font-medium">09.00–22.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-coffee-500">Sabtu–Minggu</span>
                    <span className="text-coffee-800 font-medium">08.00–23.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-coffee-800 text-cream-50 font-semibold text-base hover:bg-coffee-900 transition-all duration-300 hover:shadow-lg hover:shadow-coffee-800/20 active:scale-95 mt-auto"
            >
              Buka di Google Maps
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
