import { metaEvents } from "@/lib/metaPixel";
import { MapPin, Clock, Phone, Map } from "lucide-react";

const WSP_URL =
  "https://api.whatsapp.com/send/?phone=56949437974&text=Hola%2C+me+gustar%C3%ADa+recibir+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0";

const MAPS_URL =
  "https://www.google.com/maps/place/Global+Terrenos/@-33.4410908,-70.6540247,16z/data=!4m6!3m5!1s0x9662c560eb64a3ab:0x2c2ef04fdc7e437f!8m2!3d-33.4405893!4d-70.6523079!16s%2Fg%2F11kt5kq5cl?hl=es&entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.6663105580592!2d-70.65358356154863!3d-33.440639693348366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a41d104e51%3A0x2fce7295abfcfe92!2sBandera%20206%2C%208320000%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1783444758361!5m2!1ses!2scl";

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const InfoRow = ({ icon, label, children }: InfoRowProps) => (
  <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-100 border border-[#3B6D11] max-w-[400px]">
    <div className="w-9 h-9 rounded-full bg-[#EAF3DE] flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400 mb-0.5">
        {label}
      </p>
      <div className="text-sm text-stone-700 leading-snug">{children}</div>
    </div>
  </div>
);

export const UbicacionContacto = () => {
  return (
    <section className="py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

        {/* ── Columna izquierda ── */}
        <div className="flex flex-col gap-6 mx-auto">
          {/* Encabezado */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3B6D11] mb-1">
              Encuéntranos
            </p>
            <h2
              className="text-5xl md:text-6xl text-[#3B6D11] leading-tight"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Conversemos
            </h2>
          </div>

          {/* Filas de info */}
          <div className="flex flex-col gap-3">
            <InfoRow
              icon={<MapPin size={18} className="text-[#3B6D11]" />}
              label="Oficina"
            >
              Bandera 206, Oficina 401
              <br />
              Santiago Centro, Región Metropolitana
            </InfoRow>

            <InfoRow
              icon={<Clock size={18} className="text-[#3B6D11]" />}
              label="Horario"
            >
              Lunes a viernes
              <br />
              9:00 – 17:00 hrs
            </InfoRow>

            <InfoRow
              icon={<Phone size={18} className="text-[#3B6D11]" />}
              label="Consulta directa"
            >
              +56 9 4943 7974
            </InfoRow>
          </div>

          {/* Botones CTA */}
          <div className="flex flex-wrap gap-3 mt-auto pt-2">
            <a
              href={WSP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => metaEvents.contactWhatsapp()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#639922] text-white text-sm font-semibold transition hover:bg-[#4f7a1a]"
            >
              {/* SVG inline de WhatsApp para no depender de lucide */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.114 1.527 5.845L.057 23.5l5.809-1.525A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 0 1-5.007-1.374l-.359-.213-3.448.905.92-3.364-.234-.375A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#3B6D11] text-sm font-semibold border border-[#639922] transition hover:bg-[#EAF3DE]"
            >
              <Map size={16} aria-hidden="true" />
              Cómo llegar
            </a>
          </div>
        </div>

        {/* ── Columna derecha: mapa ── */}
        <div className="relative rounded-3xl overflow-hidden border border-stone-200 min-h-[340px]">
          <iframe
            src={MAPS_EMBED_URL}
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Remate de Terrenos"
          />
          {/* Badge flotante */}
          <div className="absolute bottom-4 left-4 bg-[#639922] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 pointer-events-none shadow-md">
            <MapPin size={13} aria-hidden="true" />
            Remate de Terrenos
          </div>
        </div>

      </div>
    </section>
  );
};