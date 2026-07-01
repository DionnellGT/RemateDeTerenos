import { ChatBotWsp } from "../components/ChatBot";
import { Contactenos } from "../components/Contactenos";
import TuParcela from "../components/home/TuParcela";
import { Proyectos } from "../components/home/Proyectos";
import { useIsMobile } from "../hooks/useIsMobile";
import { GranRentabilidad } from "../components/home/GranRentabilidad";
import { UbicacionContacto } from "../components/Ubicacioncontacto";
import { useProyectos } from "../hooks/useProyectos";

export const HomePage = () => {
  const isMobile = useIsMobile();
  const { proyectos, loading } = useProyectos();

  const proyectosActivos = proyectos
    .filter((p) => p.isActive)
    .map((p) => p.name);

  
  return (
    <div>
      {/* Hero — pantalla completa, navbar flota encima transparente */}
      <section
        className="relative overflow-hidden bg-cover bg-center pt-18 pb-10 vanishing-gradient"
      >
        <div className="relative z-10 mx-auto text-white overflow-hidden max-w-full shadow-2xl">
          <img
            src={isMobile ? "/Banner-Home-Mobile-Abril.webp" : "/Banner-Home-Web-Abril.webp"}
            alt={`banner `}
            className="w-full h-11/12 md:h-full object-cover"
          />
        </div>
        {/* 
        <div className="relative z-10 mx-auto text-white overflow-hidden max-w-full shadow-2xl">
          <img
            src={"/madera.webp"}
            alt={`banner `}
            className="w-full h-11/12 md:h-full object-cover"
          />
        </div>
        */}
      </section>

      <TuParcela/>
      <GranRentabilidad/>
      <Proyectos/>
      {!loading && <ChatBotWsp proyectosActivos={proyectosActivos} />}
      <Contactenos/>
      <UbicacionContacto/>
    </div>
  );
};