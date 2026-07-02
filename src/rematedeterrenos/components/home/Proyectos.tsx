import { Link } from "react-router";
import { useProyectos } from "../../hooks/useProyectos";
import { useRef } from "react";

export const Proyectos = () => {
  const { proyectos, loading } = useProyectos();
    const isDragging = useRef(false);


  // Evita que el click del Link se dispare si el usuario estaba arrastrando
  const handleLinkClick = (e: React.MouseEvent) => {
    if (isDragging.current) e.preventDefault();
  };


  return (
    <section id="proyectos" className="bg-[#f5f0eb] py-15 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 max-sm:px-1">
        <div className="text-center mb-5 md:mb-12">
          <p className="text-[#5cb85c] text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
            Encuentra tu parcela
          </p>
          <h2 className="font-bold font-courgette text-stone-600 text-3xl max-sm:text-2xl md:text-5xl">
            Nuestros Proyectos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-stone-500 md:text-base">
            Explora los proyectos disponibles elige la parcela que mejor se adapte a tu plan.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 animate-pulse">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-72 rounded-2xl sm:rounded-4xl bg-stone-200" />
            ))}
          </div>
        ) : proyectos.length === 0 ? (
          <div className="rounded-[1.5rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
            <p className="text-stone-700">No hay proyectos disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {proyectos.map((proyecto) => {
              const inactive = !proyecto.isActive;

              return (
                <article
                  key={proyecto.idSlug}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-[1.5rem] border border-stone-200 bg-white shadow-md sm:shadow-xl shadow-stone-900/5 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Imagen con proporción fija para que todas las tarjetas midan igual, sin recortar la imagen */}
                  <div className="w-full overflow-hidden rounded-2xl sm:rounded-[1.5rem]">
                    <img
                      src={proyecto.imageCarrousel}
                      alt={proyecto.name}
                      className={`w-full h-auto object-contain transition-all duration-300 group-hover:scale-110 ${
                        inactive ? "grayscale" : ""
                      }`}
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-4 sm:p-5">
                    <div className="text-center">
                      <p className="text-[9px] uppercase tracking-tight text-stone-400 sm:text-xs sm:tracking-[0.2em]">
                        Región de Los Lagos
                      </p>
                      <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug tracking-normal text-stone-700 sm:mt-3 sm:text-xl sm:tracking-[0.1em]"
                      >
                        {proyecto.name}
                      </h3>
                    </div>
                    <div className="mt-auto">
                      {inactive ? (
                        <span className="inline-flex w-full items-center justify-center rounded-full bg-stone-300 px-2 py-2 text-[10px] font-semibold uppercase tracking-normal text-stone-500 cursor-not-allowed select-none sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.18em]">
                          Ver proyecto
                        </span>
                      ) : (
                        <Link 
                          to={`/proyectos/${proyecto.idSlug}`}
                          onClick={(e) => { handleLinkClick(e); window.scrollTo(0, 0); }}
                          className="inline-flex w-full items-center justify-center rounded-full bg-[#9dc545] px-2 py-2 text-[10px] font-semibold uppercase tracking-normal text-white transition hover:bg-[#a9d34e] sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.18em]"
                        >
                          Ver proyecto
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};