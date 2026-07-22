import { ChatBotWsp } from "../components/ChatBot";
import { Contactenos } from "../components/Contactenos";
import TuParcela from "../components/home/TuParcela";
import { Proyectos } from "../components/home/Proyectos";
import { GranRentabilidad } from "../components/home/GranRentabilidad";
import { UbicacionContacto } from "../components/Ubicacioncontacto";
import { useProyectos } from "../hooks/useProyectos";
import { Hero } from "../components/home/Hero";
import { useEffect } from "react";
import { trackSocialVisit } from "@/lib/socialEvents";

export const HomePage = () => {
  const { proyectos, loading } = useProyectos();
  
  useEffect(() => {
    document.title = "Remate De Terrenos";
  }, []);

  useEffect(() => {
    trackSocialVisit();
  }, []);
  
  
  const proyectosActivos = proyectos
    .filter((p) => p.isActive)
    .map((p) => p.name);

  
  return (
    <div>
      {/* Hero — pantalla completa, navbar flota encima transparente */}
      <Hero/>
      <TuParcela/>
      <GranRentabilidad/>
      <Proyectos/>
      {!loading && <ChatBotWsp proyectosActivos={proyectosActivos} />}
      <Contactenos/>
      <UbicacionContacto/>
    </div>
  );
};