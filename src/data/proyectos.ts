export interface Proyecto {
  id: string;
  idSlug: string;
  name: string;
  imageCarrousel: string;
  imagenBannerPrincipal: string;
  imagenBannerPrincipalMobile: string;
  imagenesDeCaracteristicas: string[];
  vistaProyecto360: string;
  imagenesVistasProyecto: string[];
  imagenMapaFondo: string;
  linkMapa: string;
  imagenBaner2: string;
  centrosUrbanosCercanos: {
    nombre: string;
    distancia: string;
    tiempo: string;
    linkMaps?: string;
    imgCentroUrbano?: string;
  }[];
  imagenCentrosUrbanos: string;
  atraccionesTuristicas: {
    nombre: string;
    tiempo: string;
    distancia: string;
    linkMaps?: string;
    imgAtraccionTuristica?: string;
  }[];
  imagenAtraccionesTuristicas: string;
}

export const proyectos: Proyecto[] = [
  {
    id: "1",
    idSlug: "paisajes-del-rio",
    name: "Paisajes del Río",
    imageCarrousel: "/PaisajesDelRio/paisajes.webp",
    imagenBannerPrincipal: "/PaisajesDelRio/Banner-Paisajes-Web.webp",
    imagenBannerPrincipalMobile: "/PaisajesDelRio/Banner-Paisajes-Mobile.webp",
    imagenesDeCaracteristicas: [
      "/PaisajesDelRio/paisajes_1.webp",
      "/PaisajesDelRio/paisajes_2.webp",
    ],
    vistaProyecto360: "https://lanube360.com",
    imagenesVistasProyecto: [
      "/PaisajesDelRio/1.webp",
      "/PaisajesDelRio/2.webp",
      "/PaisajesDelRio/3.webp",
      "/PaisajesDelRio/4.webp",
    ],
    imagenMapaFondo: "/mapa.webp",
    linkMapa: "https://goo.gl",
    imagenBaner2: "/PaisajesDelRio/inter-paisajes.webp",
    centrosUrbanosCercanos: [
      {
        nombre: "Ruta 5 sur por Palomar",
        distancia: "12 km",
        tiempo: "15 min",
        imgCentroUrbano: "/PaisajesDelRio/Ruta5.webp",
      },
      {
        nombre: "Aeropuerto de castro",
        distancia: "53 km",
        tiempo: "55 min",
        linkMaps:"https://google.com",
        imgCentroUrbano: "/PaisajesDelRio/AeropuertoCastro.webp"
      },
      {
        nombre: "Centro Ancud",
        distancia: "34 km",
        tiempo: "40 min",
        linkMaps:"https://google.com",
        imgCentroUrbano: "/PaisajesDelRio/CentroAncud.webp"
      },
      {
        nombre: "Centro de Quemchi",
        distancia: "27 km",
        tiempo: "30 min",
        linkMaps:"https://google.com",
        imgCentroUrbano: "/PaisajesDelRio/CentroQuemchi.webp"
      },
      {
        nombre: "Centro de Castro",
        distancia: "68 km",
        tiempo: "1 h 10 min",
        linkMaps: "https://google.com",
        imgCentroUrbano: "/PaisajesDelRio/CentroCastro.webp"
      }
    ],
    imagenCentrosUrbanos: "/PaisajesDelRio/f1.webp",
    atraccionesTuristicas: [
      {
        nombre: "Isla aucar almas navegantes",
        tiempo: "32 min",
        distancia: "27 km",
        linkMaps:"https://google.com",
        imgAtraccionTuristica: "/PaisajesDelRio/IslaAucarAlmasNavegantes.webp"
      },
      {
        nombre: "Parque aventura chaiguen",
        tiempo: "39 min",
        distancia: "33 km",
        imgAtraccionTuristica: "/PaisajesDelRio/ParqueAventuraChaiguen.webp"
      },
      {
        nombre: "Parque ecológico y mitológico",
        tiempo: "34 min",
        distancia: "29 km",
        imgAtraccionTuristica: "/PaisajesDelRio/ParqueEcologicoMitologico.jpg"
      },
      {
        nombre: "Bahía de duhatao",
        tiempo: "1h 24min",
        distancia: "59 km",
        imgAtraccionTuristica: "/PaisajesDelRio/BahiaDuhatao.webp"
      },
      {
        nombre: "Pinguineras puñihuil chiloé",
        tiempo: "1h 15min",
        distancia: "54 km",
        imgAtraccionTuristica: "/PaisajesDelRio/PinguinerasPunihuil.webp"
      }, 
      {
        nombre: "Santuario de las aves de ancud",
        tiempo: "48 min",
        distancia: "38 km",
        imgAtraccionTuristica: "/PaisajesDelRio/SantuarioAvesAncud.jpg"
      },
      {
        nombre: "Muelle de la luz",
        tiempo: "52 min",
        distancia: "43 km",
        imgAtraccionTuristica: "/PaisajesDelRio/MuelleDeLaLuz.webp"
      },
      {
        nombre: "Ecomarine Punihuil",
        tiempo: "1h 16 min",
        distancia: "54 km",
        imgAtraccionTuristica: "/PaisajesDelRio/EcomarinePunihuil.webp"
      }
    ],
    imagenAtraccionesTuristicas: "/PaisajesDelRio/f2.webp",
  },
  {
    id: "2",
    idSlug: "los-muermos",
    name: "Los Muermos",
    imageCarrousel: "/los_muermos/avellanolm.webp",
    imagenBannerPrincipal: "/los_muermos/avellanolmBanner.webp",
    imagenBannerPrincipalMobile: "/los_muermos/avellanolmBannerMobile.webp",
    imagenesDeCaracteristicas: [
      "/los_muermos/choose1-img.webp",
      "/los_muermos/choose2-img.webp",
    ],
    vistaProyecto360: "https://lanube360.com",
    imagenesVistasProyecto: [
      "/los_muermos/team1-img1.webp",
      "/los_muermos/team1-img2.webp",
      "/los_muermos/team1-img3.webp",
    ],
    imagenMapaFondo: "/los_muermos/avellanolm_mapa.webp",
    linkMapa: "https://goo.gl",
    imagenBaner2: "/los_muermos/avellanolmBanner.webp",
    centrosUrbanosCercanos: [
      {
        nombre: "Centro de Los Muermos",
        distancia: "10 km",
        tiempo: "10 min",
        linkMaps: "https://google.com",
        imgCentroUrbano: "/los_muermos/avellanolm_centrosurbanos.webp"
      },
      {
        nombre: "Aeropuerto El Tepual Puerto Montt",
        distancia: "35 km",
        tiempo: "30 min",
        linkMaps: "https://google.com",
        imgCentroUrbano: "/los_muermos/aeropuerto_El_Tepual.webp"
      },
      {
        nombre: "Centro de Fresia",
        distancia: "43 km",
        tiempo: "45 min",
        linkMaps: "https://google.com",
        imgCentroUrbano: "/los_muermos/fresia_urbano.webp"
      }
    ],
    imagenCentrosUrbanos: "/los_muermos/avellanolm_centrosurbanos.webp",
    atraccionesTuristicas: [
      {
        nombre: "Río Llico",
        tiempo: "12 min",
        distancia: "10 km",
        imgAtraccionTuristica: "/los_muermos/rio_llico.webp"
      },
      {
        nombre: "Playa Puerto Godoy",
        tiempo: "55 min",
        distancia: "54 km",
        imgAtraccionTuristica: "/los_muermos/puertogodoy_playa.webp"
      },
      {
        nombre: "Estaquilla",
        tiempo: "45 min",
        distancia: "44 km",
        imgAtraccionTuristica: "/los_muermos/estaquilla_foto.webp"
      }
    ],
    imagenAtraccionesTuristicas: "/los_muermos/avellanolm_atracciones.webp",
  },
  {
    id: "3",
    idSlug: "sendero-el-roble",
    name: "Sendero el Roble",
    isActive: true,
    imageCarrousel: "/card_sendero.jpg",
    imagenBannerPrincipal: "/card_sendero.jpg",
    imagenBannerPrincipalMobile: "/card_sendero.jpg",
    imagenesDeCaracteristicas: [],
    vistaProyecto360: "",
    imagenesVistasProyecto: [],
    imagenMapaFondo: "/mapa.webp",
    linkMapa: "https://google.com",
    imagenBaner2: "/card_sendero.jpg",
    centrosUrbanosCercanos: [],
    imagenCentrosUrbanos: "/PaisajesDelRio/f1.webp",
    atraccionesTuristicas: [],
    imagenAtraccionesTuristicas: "/PaisajesDelRio/f2.webp"
  }
];
