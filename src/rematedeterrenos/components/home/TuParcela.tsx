const ecoSustentableImg = "/ecoSustentable.png"
const confianzaImg = "/confianza.png"
const ubicacionImg = "/ubicacion.png"
const features = [
  {
    img: ecoSustentableImg,
    title: "Eco Sustentable",
    description: "Proyectos con compromiso sustentable y energías renovables.",
  },
  {
    img: ubicacionImg,
    title: "Ubicación",
    description: "Invierte en tu terreno, en el mejor lugar del sur de Chile.",
  },
  {
    img: confianzaImg,
    title: "Confianza",
    description: "Te ayudamos a elegir un proyecto según tus necesidades.",
  },
];

export const TuParcela = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f0ede6] flex flex-col items-center justify-center px-5 py-15"
           style={{
             backgroundImage:
               "url('/fondotrama.jpg')",
           }}>

        {/* ── Encabezado ── */}
        <div className="text-center mb-14">
          <h1
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-[#1a3a3a]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tu parcela en
          </h1>
          <p
            className="font-script text-5xl md:text-7xl text-[#1fcd26] leading-tight mt-1"
          >
            Chiloé te espera
          </p>
        </div>

        {/* ── Tarjetas ── */}
        <div className="flex flex-wrap justify-center gap-7 max-w-5xl w-full">
          {features.map((feature, i) => (
            <div
              key={i}
              className="
                group
                flex-1 min-w-[220px] max-w-[280px]
                bg-[#f0ede6]
                rounded-2xl
                border-2 border-[#5cb85c]
                border-t-[6px] border-t-[#1a1a1a]
                shadow-md
                flex flex-col items-center
                px-7 py-10
                text-center
                transition-all duration-200 ease-out
                hover:-translate-y-1.5 hover:shadow-xl
              "
              style={{ borderTopColor: "#1a1a1a", borderTopWidth: "6px" }}
            >
              {/* Ícono */}
              <div className="w-24 h-24 flex items-center justify-center mb-6">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Título */}
              <h2
                className="text-2xl font-extrabold text-[#1a1a1a] mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {feature.title}
              </h2>

              {/* Descripción */}
              <p className="text-lg text-[#555] leading-relaxed font-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TuParcela;