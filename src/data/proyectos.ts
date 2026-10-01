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
    vistaProyecto360: "https://www.lanube360.com/paisajesdelrio-chiloe/",
    imagenesVistasProyecto: [
      "/PaisajesDelRio/1.webp",
      "/PaisajesDelRio/2.webp",
      "/PaisajesDelRio/3.webp",
      "/PaisajesDelRio/4.webp",
    ],
    imagenMapaFondo: "/mapa.webp",
    linkMapa: "https://maps.app.goo.gl/SECnqq15deK5HPTw7",
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
        linkMaps:"https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Aeropuerto+castro+-+M72H%2BMF,+Mocopulli,+Dalcahue,+Los+Lagos/@-42.2319109,-73.8903957,68066m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x962213318af9c73f:0xba3a46f3252085d6!2m2!1d-73.7212554!2d-42.3483398!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/PaisajesDelRio/AeropuertoCastro.webp"
      },
      {
        nombre: "Centro Ancud",
        distancia: "34 km",
        tiempo: "40 min",
        linkMaps:"https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Centro+Ancud+Achs+Salud+-+Almte.+Latorre+1322,+Ancud,+Los+Lagos/@-41.9683956,-73.9013309,34175m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x96228d64bd8d321b:0x5d50087efca16301!2m2!1d-73.8080794!2d-41.8703568!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/PaisajesDelRio/CentroAncud.webp"
      },
      {
        nombre: "Centro de Quemchi",
        distancia: "27 km",
        tiempo: "30 min",
        linkMaps:"https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Quemchi,+Los+Lagos/@-42.0978576,-73.7323682,34105m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x96189cfa882a8515:0x46dd143ea065313!2m2!1d-73.4780559!2d-42.1447134!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/PaisajesDelRio/CentroQuemchi.webp"
      },
      {
        nombre: "Centro de Castro",
        distancia: "68 km",
        tiempo: "1 h 10 min",
        linkMaps: "https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Castro,+Los+Lagos/@-42.2220692,-74.0661769,68076m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x96223cfcf1a3a9c5:0xabd8bf191d3a5cff!2m2!1d-73.7635341!2d-42.4805974!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/PaisajesDelRio/CentroCastro.webp"
      }
    ],
    imagenCentrosUrbanos: "/PaisajesDelRio/f1.webp",
    atraccionesTuristicas: [
      {
        nombre: "Isla aucar almas navegantes",
        tiempo: "32 min",
        distancia: "27 km",
        linkMaps:"https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Isla+de+las+Almas+Navegantes,+Quemchi,+Los+Lagos/@-42.0978576,-73.7330817,34105m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x962277cd07597e91:0x23cd6087733c325d!2m2!1d-73.4794647!2d-42.161702!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
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
    vistaProyecto360: "https://www.lanube360.com/elavellano-losmuermos-entrebosquesypraderas/",
    imagenesVistasProyecto: [
      "/los_muermos/team1-img1.webp",
      "/los_muermos/team1-img2.webp",
      "/los_muermos/team1-img3.webp",
    ],
    imagenMapaFondo: "/los_muermos/avellanolm_mapa.webp",
    linkMapa: "https://maps.app.goo.gl/HdPcPvZFxGitpppd7",
    imagenBaner2: "/los_muermos/avellanolmBanner.webp",
    centrosUrbanosCercanos: [
      {
        nombre: "Centro de Los Muermos",
        distancia: "10 km",
        tiempo: "10 min",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Los+Muermos,+Los+Lagos/@-41.4147789,-73.4491183,8618m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x9622ab79ba4d330f:0x5cde10c0b33ef4a5!2m2!1d-73.4651433!2d-41.3944267!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/los_muermos/avellanolm_centrosurbanos.webp"
      },
      {
        nombre: "Aeropuerto El Tepual Puerto Montt",
        distancia: "35 km",
        tiempo: "30 min",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Aeropuerto+El+Tepual,+5480000+Puerto+Montt,+Los+Lagos/@-41.4297954,-73.3742526,34462m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x9618180d92b8a285:0xe832ce1a3e5d101e!2m2!1d-73.0986775!2d-41.4331342!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
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
    linkMapa: "https://maps.google.com",
    imagenBaner2: "/card_sendero.jpg",
    centrosUrbanosCercanos: [],
    imagenCentrosUrbanos: "/PaisajesDelRio/f1.webp",
    atraccionesTuristicas: [],
    imagenAtraccionesTuristicas: "/PaisajesDelRio/f2.webp"
  }
];
