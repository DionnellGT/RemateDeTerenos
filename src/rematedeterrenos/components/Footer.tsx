

export const Footer = () => {
  return (
    <footer className="bg-[#024323] py-5 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-footer-white.png"
            alt="El Avellano"
            className="h-15 w-auto brightness-0 invert"
          />
        </a>

        {/* Contacto */}
          <div className="flex flex-col-2 gap-4">
            <a
              href="tel:+56949437974"
              className="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/20"
            >
              <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Teléfono</span>
              <span className="mt-1 block text-base font-semibold text-white">+56 9 4943 7974</span>
            </a>
            <a
              href="mailto:contacto@rematedeterrenos.cl"
              className="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/20"
            >
              <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Correo</span>
              <span className="mt-1 block text-base font-semibold text-white">contacto@rematedeterrenos.cl</span>
            </a>
          </div>

        {/* Redes sociales */}
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

      <div className="max-w-6xl mx-auto mt-4 border-t border-white/20 pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Remate de Terrenos. Todos los derechos reservados.
      </div>
    </footer>
  );
};