import { useIsMobile } from "@/rematedeterrenos/hooks/useIsMobile";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";

const AUTOPLAY_INTERVAL_MS = 4001;

const TOTAL_SLIDES = 2;

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = useIsMobile();
  const isDragging = useRef(false);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // Evita que el click del Link se dispare si el usuario estaba arrastrando
  const handleLinkClick = (e: React.MouseEvent) => {
    if (isDragging.current) e.preventDefault();
  };


  return (
    <section
      id="inicio"
      className="relative aspect-[1328/1949] md:aspect-[384/125] mt-18 flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Pantalla 1: contenido original del hero ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
        }`}
        aria-hidden={activeSlide !== 0}
      >
        {/* Imagen de fondo: una versión para desktop y otra para mobile */}
          <img 
            src={isMobile ? "/banner web Global2_Mobile Remate 3.png" : "/banner web Global2_Banner Remate 3.png"}
            alt="banner 1"
            className="absolute inset-0 z-0 w-full h-full object-cover"
          />

        {/* Overlay gradiente: opaco a la izquierda, transparente a la derecha */}
        <div className="absolute inset-0 z-0 " />
      </div>

      {/* ── Pantalla 2: imágenes desktop/mobile de paisajes ── */}
      <Link
        to={`/proyectos/molulco_natri`}
        onClick={(e) => { handleLinkClick(e); window.scrollTo(0, 0); }}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
        }`}
        aria-hidden={activeSlide !== 1}
      >
        {/* Imagen de fondo: una versión para desktop y otra para mobile */}
        <img  
            src={isMobile ? "/banner web Global2_Mobile Remate 2.jpg" : "/banner web Global2_Banner Remate 2.jpg"}
            alt="banner 2"
            className="absolute inset-0 z-0 w-full h-full object-cover"
          />
        {/* Overlay gradiente: opaco a la izquierda, transparente a la derecha */}
        <div className="absolute inset-0 z-0 " />
      </Link>

      {/* ── Indicadores del carrousel ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Ir a la pantalla ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
