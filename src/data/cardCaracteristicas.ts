
export interface Caracteristica {
  icono: string;
  titulo: string;
  bgColor?: string;
}

export const cardCaracteristicas: Caracteristica[] = [
  {
    icono: "/caracteristicas/Terrenos.png",
    titulo: "Terrenos desde los 5.000 mts2",
  },
  {
    icono: "/caracteristicas/EnergiaRenovables.png",
    titulo: "Apto para energías renovables",
  },
  {
    icono: "/caracteristicas/Lluvias.png",
    titulo: "Cosecha de aguas lluvias",
  },
  {
    icono: "/caracteristicas/caminos.png",
    titulo: "Aprovechamiento de caminos existentes",
  },
  {
    icono: "/caracteristicas/Cultivos.png",
    titulo: "Ideal para el Auto cultivo",
  },
  {
    icono: "/caracteristicas/autosostentabilidad.png",
    titulo: "Proyecto comprometido con la autosostentabilidad",
  },
];