export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'kopi-susu-senja',
    name: 'Kopi Susu Senja',
    description:
      'Espresso lembut dipadu susu segar dengan sentuhan gula aren cair.',
    price: 18000,
    image:
      'https://images.pexels.com/photos/38028987/pexels-photo-38028987.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Segelas kopi susu dingin dengan sedotan di coffee shop',
  },
  {
    id: 'americano',
    name: 'Americano',
    description:
      'Espresso murni dengan air panas, rasa kopi yang bersih dan jujur.',
    price: 15000,
    image:
      'https://images.pexels.com/photos/5665246/pexels-photo-5665246.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cangkir americano kopi hitam dilihat dari atas',
  },
  {
    id: 'caramel-latte',
    name: 'Caramel Latte',
    description:
      'Latte creamy dengan siraman karamel manis yang pas di setiap tegukan.',
    price: 22000,
    image:
      'https://images.pexels.com/photos/20854091/pexels-photo-20854091.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Kopi caramel latte dingin dengan whipped cream dan caramel',
  },
  {
    id: 'chicken-katsu-rice',
    name: 'Chicken Katsu Rice',
    description:
      'Ayam katsu renyah dengan saus khas, disajikan bersama nasi hangat.',
    price: 28000,
    image:
      'https://images.pexels.com/photos/18405156/pexels-photo-18405156.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mangkuk chicken katsu rice dengan saus dan nasi',
  },
  {
    id: 'beef-teriyaki-rice',
    name: 'Beef Teriyaki Rice',
    description:
      'Daging sapi gurih dengan saus teriyaki manis, melimpah di atas nasi.',
    price: 30000,
    image:
      'https://images.pexels.com/photos/19802119/pexels-photo-19802119.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mangkuk beef teriyaki rice dengan taburan bawang goreng',
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    description:
      'Kentang goreng renyah keemasasan, teman santai untuk segala suasana.',
    price: 16000,
    image:
      'https://images.pexels.com/photos/27758755/pexels-photo-27758755.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'French fries keemasasan dalam wadah',
  },
];

export function formatPrice(price: number): string {
  return `Rp${price.toLocaleString('id-ID')}`;
}
