// src/rematedeterrenos/components/LoadingSpinner.tsx

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5f0eb]/85 backdrop-blur-sm">
      <div className="relative flex h-24 w-24 items-center justify-center">

        {/* Anillo exterior */}
        <div className="absolute inset-0 rounded-full border-[3.5px] border-transparent border-t-[#639922] border-r-[#639922] animate-spin" />

        {/* Anillo interior (gira al revés) */}
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#aedb4c] border-l-[#aedb4c]"
          style={{ animation: 'spin-reverse 1.4s cubic-bezier(0.6,0.2,0.4,0.8) infinite' }}
        />

        {/* Logo */}
        <img
          src="/favicon.ico"
          alt="Cargando..."
          className="relative z-10 h-11 w-11 rounded-full object-contain"
        />
      </div>
    </div>
  );
};