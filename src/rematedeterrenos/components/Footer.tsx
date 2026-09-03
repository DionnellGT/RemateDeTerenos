import { metaEvents } from "@/lib/metaPixel";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-[#024323] py-10 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* 1. Logo */}
        <div className="flex items-start">
          <a href="/" className="flex items-center">
            <img
              src="/logo-footer-white.png"
              alt="El Avellano"
              className="h-15 w-auto brightness-0 invert"
            />
          </a>
        </div>

        {/* 2. Contacto */}
        <div className="flex flex-col gap-4 max-w-[380px]">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Contacto
          </h3>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://api.whatsapp.com/send/?phone=56949437974&text=Hola%2C+me+gustar%C3%ADa+recibir+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0"
              onClick={() => metaEvents.contactWhatsapp()}
              className="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/20"
            >
              <span className="block text-xs max-sm:text-[12px] uppercase tracking-[0.18em] text-slate-400">Teléfono</span>
              <span className="max-[1190px]:text-xs mt-1 block text-base font-semibold text-white">+56 9 4943 7974</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@rematedeterrenos.cl&su=Consulta&body=Hola,%20me%20interesa..."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => metaEvents.contactEmail()}
              className="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/20"
            >
              <span className="block text-xs max-sm:text-[12px] uppercase tracking-[0.18em] text-slate-400">Correo</span>
              <span className="max-[1190px]:text-xs mt-1 block text-base font-semibold text-white break-all">contacto@rematedeterrenos.cl</span>
            </a>
          </div>
        </div>

        {/* 3. Información legal */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Información legal
          </h3>
          <div className="flex flex-col gap-2">
            <Link
              to="/politica-de-privacidad"
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm text-white/80 transition hover:text-white hover:underline"
            >
              Política de privacidad
            </Link>
            <Link
              to="/terminos-y-condiciones"
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm text-white/80 transition hover:text-white hover:underline"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>

        {/* 4. Redes sociales */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Síguenos
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/rematedeterrenos"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <img src="/instagram.webp" alt="Instagram" className="w-7 h-7" />
            </a>
            <a
              href="https://www.facebook.com/rematedeterrenos.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <img src="/facebook.webp" alt="Facebook" className="w-7 h-7 invert" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 border-t border-white/20 pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Remate de Terrenos. Todos los derechos reservados.
      </div>
    </footer>
  );
};