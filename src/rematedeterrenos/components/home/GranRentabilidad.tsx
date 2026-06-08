import { CheckCircle2 } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";

export const GranRentabilidad = () => {
  const isMobile = useIsMobile();
  const beneficios = [
    {
      title: "Alta Plusvalía",
      description: "Comprar parcelas agrícolas es una inversión mucho más accesible. Negocio seguro, aun si decides no construir en el terreno.",
    },
    {
      title: "Asesoría Personalizada",
      description: "Resolvemos tus dudas y nuestro equipo de profesionales te acompañará durante todo el proceso.",
    },
    {
      title: "Financiamiento",
      description: "Contamos con financiamiento, accede a nuestro crédito directo de hasta 24 cuotas sin interés.",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 pb-12 pt-12 md:py-0 ">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/lana.jpg"
          alt="Fondo paisaje"
          className="absolute inset-x-0 top-0 h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* Left side - Content */}
        <div className="text-white order-1">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Gran<br />
            rentabilidad a<br />
            <span className="text-yellow-400 italic font-script font">bajo costo</span>
          </h2>

          <div className="space-y-3 max-w-[395px] my-6">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex gap-4 p-5 bg-white rounded-xl border-2 hover:scale-105 transition-transform duration-200" style={{ borderColor: '#024323' }}>
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6" style={{ color: '#024323' }} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#024323' }}>
                    {beneficio.title}
                  </h3>
                  <p className="text-gray-700 text-sm font-semibold leading-relaxed">{beneficio.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center order-2">
          <div className="relative w-full max-w-md">
            <img 
              src={isMobile ? "/fotogentemob.jpg" : "/fotogente.jpg"}
              alt="Pareja joven" 
              className="w-full h-full object-cover rounded-2xl relative z-10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}