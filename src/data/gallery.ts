export interface GalleryImage {
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Barista menuang latte art ke dalam cangkir kopi',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/810042/pexels-photo-810042.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interior coffee shop modern dengan pencahayaan hangat',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/36853606/pexels-photo-36853606.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Hidangan makanan Indonesia dengan nasi dan lauk',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/5709523/pexels-photo-5709523.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Teman tersenyum menikmati kopi bersama di cafe',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/33682397/pexels-photo-33682397.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Biji kopi panggang close-up dengan tekstur kaya',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/12185973/pexels-photo-12185973.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cangkir kopi dengan pemandangan senja yang hangat',
    span: 'normal',
  },
];
