import { cardCaracteristicas } from "@/data/cardCaracteristicas";
import { useParams } from "react-router";

const Card = ({ item }: { item: { icono: string; titulo: string } }) => (
  <div
    className="flex flex-col items-center text-center gap-4 rounded-2xl px-5 py-8 group transition-all duration-300 w-full h-full cursor-default"
    style={{
      background: "linear-gradient(160deg, #faf8f4 0%, #ede9e0 100%)",
      boxShadow: `
        0 1px 0 rgba(255,255,255,0.9) inset,
        0 -1px 0 rgba(0,0,0,0.08) inset,
        4px 6px 16px rgba(0,0,0,0.18),
        -2px -2px 6px rgba(255,255,255,0.7),
        0 8px 24px rgba(0,0,0,0.12)
      `,
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.boxShadow = `
        0 1px 0 rgba(255,255,255,0.95) inset,
        0 -1px 0 rgba(0,0,0,0.1) inset,
        6px 10px 28px rgba(0,0,0,0.22),
        -3px -3px 10px rgba(255,255,255,0.8),
        0 12px 36px rgba(0,0,0,0.16),
        0 0 0 1px rgba(74,122,74,0.25)
      `;
      el.style.background = "linear-gradient(160deg, #ffffff 0%, #eae6dc 100%)";
      el.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.boxShadow = `
        0 1px 0 rgba(255,255,255,0.9) inset,
        0 -1px 0 rgba(0,0,0,0.08) inset,
        4px 6px 16px rgba(0,0,0,0.18),
        -2px -2px 6px rgba(255,255,255,0.7),
        0 8px 24px rgba(0,0,0,0.12)
      `;
      el.style.background = "linear-gradient(160deg, #faf8f4 0%, #ede9e0 100%)";
      el.style.transform = "translateY(0)";
    }}
  >
    {/* Ícono — escala + rotación en hover, sin filtro para conservar color original */}
    <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-in-out group-hover:scale-115 group-hover:rotate-12">
      <img
        src={item.icono}
        alt={item.titulo}
        className="w-full h-full object-contain"
      />
    </div>

    {/* Texto en verde, escala en hover */}
    <p className="text-[#4a7a4a] text-sm md:text-md font-semibold leading-snug transition-all duration-300 group-hover:scale-110">
      {item.titulo}
    </p>
  </div>
);

export const CardsCaracteristicas = () => {
  const { idSlug } = useParams();

  const items =
    idSlug === "paisajes-del-rio"
      ? cardCaracteristicas.filter(
          (c) => c.titulo.toLowerCase() !== "factibilidad de luz"
        )
      : cardCaracteristicas;

  const hasLastPair = items.length === 6;

  return (
    <div className="py-12 bg-stone-900">
      <div className="max-w-6xl mx-auto px-6 space-y-4">

        {/* ════ DESKTOP layout (md+) ════ */}

        {/* Desktop Row 1: items 0-2, always a full 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {items.slice(0, 3).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* Desktop Row 2:
            6 items → full 3-col grid (items 3-5)
            5 items → 2 cards centered, each 1/3 wide (items 3-4) */}
        {hasLastPair ? (
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {items.slice(3, 6).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        ) : (
          <div className="hidden md:flex justify-center gap-4">
            {items.slice(3, 5).map((item, i) => (
              <div key={i} className="w-[calc((100%-2rem)/3)]">
                <Card item={item} />
              </div>
            ))}
          </div>
        )}


        {/* ════ MOBILE layout (< md) ════ */}

        {/* Mobile Row 1: items 0-1 */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {items.slice(0, 2).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* Mobile Row 2: items 2-3 */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {items.slice(2, 4).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* Mobile Row 3:
            6 items → items 4-5 as a 2-col grid
            5 items → item 4 centered, same width as a 2-col cell */}
        {hasLastPair ? (
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {items.slice(4, 6).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center md:hidden">
            {items[4] && (
              <div className="w-[calc(50%-0.5rem)]">
                <Card item={items[4]} />
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};