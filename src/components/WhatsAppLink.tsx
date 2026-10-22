import type { ReactNode } from "react";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type WhatsAppLinkProps = {
  children: ReactNode;
  message?: string;
  className?: string;
};

export function WhatsAppLink({ children, message, className = "btn btn-primary" }: WhatsAppLinkProps) {
  return (
    <a className={className} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      <span>{children}</span>
      <span className="visually-hidden"> (abre o WhatsApp)</span>
    </a>
  );
}
