import { site } from "../content/site";

export function whatsappUrl(message: string = site.contact.defaultMessage): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
