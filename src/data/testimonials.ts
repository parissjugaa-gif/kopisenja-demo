export interface Testimonial {
  name: string;
  role: string;
  text: string;
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rani Pratiwi',
    role: 'Mahasiswa',
    text: 'Tempatnya nyaman banget buat nongkrong atau belajar. Kopinya enak dan harganya masih masuk akal buat kantong mahasiswa.',
    initial: 'R',
  },
  {
    name: 'Dimas Saputra',
    role: 'Freelancer',
    text: 'Suasananya hangat, cocok buat kerja remote. Wifi stabil, kopi susunya jadi andalan setiap sore di Cirebon.',
    initial: 'D',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Karyawan',
    text: 'Chicken katsu rice-nya juara! Porsinya pas dan rasaannya enak. Tempatnya bersih, pelayanannya juga ramah.',
    initial: 'S',
  },
];
