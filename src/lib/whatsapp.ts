export const WHATSAPP_NUMBER = '6283187925927';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE =
  'Halo Kopi Senja, saya ingin melakukan pemesanan. Bisa dibantu?';

export const DEFAULT_WHATSAPP_LINK = whatsappLink(DEFAULT_MESSAGE);
