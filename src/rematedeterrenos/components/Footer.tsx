

export const Footer = () => {
  return (
    <footer className="bg-[#024323] py-5 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-footer-white.png"
            alt="El Avellano"
            className="h-15 w-auto brightness-0 invert"
          />
        </a>

        {/* Redes sociales */}
        <div className="flex items-center gap-4">
            <a 
                href="https://www.instagram.com/rematedeterrenos"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
                <img src="/instagram.webp" alt="Instagram" className="w-7 h-7 " />
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
    </footer>
  );
};