import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProyectos } from "../../hooks/useProyectos";
import { Link } from "react-router";

export const Proyectos = () => {
  const proyectos = useProyectos();
  const [current, setCurrent] = useState(0);
  const total = proyectos.length;

  return (
    <section id="proyectos" className="bg-[#f5f0eb] py-15 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-5 md:mb-12">
          <p className="text-[#a07030] text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
            Encuentra tu parcela
          </p>
          <h2 className="font-bold text-stone-900 text-3xl max-sm:text-2xl md:text-5xl">
            Nuestros Proyectos
          </h2>
        </div>


      </div>
    </section>
  );
};