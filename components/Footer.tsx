import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  const navLinks = [
    { href: "/noticias", label: "Notícias" },
    { href: "/eventos", label: "Eventos" },
    { href: "/institucional", label: "Institucional" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <footer className="bg-card border-t-2 border-border text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div
          className="
          grid 
          grid-cols-1        
          md:grid-cols-4    
          gap-10           
        "
        >
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-zanolli.svg"
                width={48}
                height={48}
                alt="Logo Instituto Zanolli"
              />
              <span className="text-base font-medium leading-tight">
                Instituto
                <br />
                Zanolli
              </span>
            </Link>

            <address className="text-sm text-muted-foreground not-italic">
              Av. Marechal Rondon, 406 - Pioneiros,
              <br />
              Pimenta Bueno - RO, 76970-000
            </address>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="tel:+5500999999999"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (69) 3451-6672
              </a>
              <a
                href="mailto:contato@instituzanolli.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@instituzanolli.com
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Nossas Redes</h3>
            <div className="flex flex-row gap-4">
              <Link
                href="https://www.facebook.com/InstitutoZanolli/?locale=pt_BR"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/institutozanollipb/"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Instituto Zanolli. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
