import React from "react";

/**
 * PhotoBento Component
 * Beautifully decorated bento grid with flowers, floating animations, and elegant design
 * MagicBento will be installed via: npx shadcn@latest add @react-bits/MagicBento-JS-CSS
 */

// After installing MagicBento, import it:
// import MagicBento from "./ui/MagicBento";

const PhotoBento = () => {
  // Photo data - 20 images from /public/assets folder
  const photos = [
    { src: "public/assets/20240628_143654.png", alt: "Memory 1" },
    { src: "public/assets/20250618_212546.jpg", alt: "Memory 2" },
    { src: "public/assets/20240829_182000.jpg", alt: "Memory 3" },
    { src: "public/assets/20240718_101459.jpg", alt: "Memory 4" },
    { src: "public/assets/20240910_220112.jpg", alt: "Memory 5" },
    { src: "public/assets/20251209_212059.jpg", alt: "Memory 6" },
    { src: "public/assets/20240629_180006.jpg", alt: "Memory 7" },
    { src: "public/assets/20250618_221915.jpg", alt: "Memory 8" },
    { src: "public/assets/20241005_203645.jpg", alt: "Memory 9" },
    { src: "public/assets/20241019_130236.jpg", alt: "Memory 10" },
    {
      src: "public/assets/Gorewada photo.png",
      alt: "Memory 11",
    },
    { src: "public/assets/20250816_094948.jpg", alt: "Memory 12" },
    {
      src: "public/assets/f86c19e3689d38e40f7bb13bce63b5bd.jpg",
      alt: "Memory 13",
    },
    { src: "public/assets/20250618_211309.jpg", alt: "Memory 14" },
    { src: "public/assets/20250610_140958.jpg", alt: "Memory 15" },
    { src: "public/assets/20240927_161709.jpg", alt: "Memory 16" },
    { src: "public/assets/Snapchat-681381959.jpg", alt: "Memory 17" },
    { src: "public/assets/20250816_122332.jpg", alt: "Memory 18" },
    { src: "public/assets/20250927_211351.jpg", alt: "Memory 19" },
    { src: "public/assets/20250726_192155.jpg", alt: "Memory 20" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/40 to-white pointer-events-none" />

      {/* Floating flowers - scattered throughout */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top area flowers */}
        <div className="absolute top-8 left-[5%] text-4xl opacity-35 animate-float">
          🌸
        </div>
        <div className="absolute top-16 left-[15%] text-3xl opacity-25 animate-float-delayed">
          ✿
        </div>
        <div className="absolute top-12 right-[10%] text-5xl opacity-40 animate-float-slow">
          🌺
        </div>
        <div className="absolute top-20 right-[20%] text-3xl opacity-30 animate-float">
          💮
        </div>

        {/* Left side flowers */}
        <div className="absolute top-[20%] left-[2%] text-4xl opacity-30 animate-float-slow">
          🌷
        </div>
        <div className="absolute top-[40%] left-[3%] text-3xl opacity-25 animate-float">
          🌸
        </div>
        <div className="absolute top-[60%] left-[2%] text-4xl opacity-30 animate-float-delayed">
          🌹
        </div>
        <div className="absolute top-[80%] left-[4%] text-3xl opacity-25 animate-float-slow">
          ✿
        </div>

        {/* Right side flowers */}
        <div className="absolute top-[25%] right-[2%] text-4xl opacity-30 animate-float-delayed">
          💐
        </div>
        <div className="absolute top-[45%] right-[3%] text-3xl opacity-25 animate-float-slow">
          🌸
        </div>
        <div className="absolute top-[65%] right-[2%] text-4xl opacity-30 animate-float">
          🌺
        </div>
        <div className="absolute top-[85%] right-[4%] text-3xl opacity-25 animate-float-delayed">
          🌷
        </div>

        {/* Bottom area flowers */}
        <div className="absolute bottom-16 left-[12%] text-4xl opacity-35 animate-float">
          🌸
        </div>
        <div className="absolute bottom-24 left-[25%] text-3xl opacity-25 animate-float-delayed">
          💮
        </div>
        <div className="absolute bottom-12 right-[15%] text-5xl opacity-40 animate-float-slow">
          🌷
        </div>
        <div className="absolute bottom-20 right-[28%] text-3xl opacity-30 animate-float">
          ✿
        </div>

        {/* Sparkles scattered */}
        <div className="absolute top-[15%] left-[30%] text-yellow-400 text-sm opacity-50 animate-pulse">
          ✦
        </div>
        <div className="absolute top-[35%] right-[25%] text-yellow-400 text-xs opacity-40 animate-pulse delay-100">
          ✦
        </div>
        <div className="absolute top-[55%] left-[20%] text-yellow-400 text-sm opacity-50 animate-pulse delay-200">
          ✦
        </div>
        <div className="absolute top-[75%] right-[35%] text-yellow-400 text-xs opacity-40 animate-pulse delay-300">
          ✦
        </div>
        <div className="absolute bottom-[25%] left-[40%] text-yellow-400 text-sm opacity-50 animate-pulse">
          ✦
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with flower decorations */}
        <div className="text-center mb-16">
          {/* Top flower decoration */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl opacity-50 animate-float">🌷</span>
            <span className="text-3xl opacity-70 animate-float-delayed">
              🌸
            </span>
            <span className="text-4xl animate-float-slow">🌺</span>
            <span className="text-3xl opacity-70 animate-float-delayed">
              🌸
            </span>
            <span className="text-2xl opacity-50 animate-float">🌷</span>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
            <span className="text-pink-400 text-sm">✿</span>
            <span className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          </div>

          {/* Title with glow effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 opacity-40 scale-110" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-neutral-800 mb-4 relative">
              You.
            </h2>
          </div>

          <p className="text-neutral-500 font-light tracking-wide mb-4">
            Some frames of you
          </p>

          {/* Heart divider */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-pink-300 to-pink-300" />
            <span className="text-rose-400 text-xl animate-pulse">♡</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent via-pink-300 to-pink-300" />
          </div>
        </div>

        {/* Bento Grid with decorative border */}
        <div className="relative">
          {/* Decorative border glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 rounded-3xl blur-xl opacity-30" />

          {/* Grid container */}
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-4 md:p-6 border border-pink-100 shadow-lg">
            {/* Corner flower decorations */}
            <div className="absolute -top-3 -left-3 text-2xl animate-float">
              🌸
            </div>
            <div className="absolute -top-3 -right-3 text-2xl animate-float-delayed">
              🌸
            </div>
            <div className="absolute -bottom-3 -left-3 text-2xl animate-float-delayed">
              🌸
            </div>
            <div className="absolute -bottom-3 -right-3 text-2xl animate-float">
              🌸
            </div>

            {/*
              After installing MagicBento, you can wrap the grid with it for interactive effects.
              For now, using a standard bento grid layout.
            */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 auto-rows-[100px] md:auto-rows-[120px]">
              {photos.map((photo, index) => (
                <PhotoCard key={index} photo={photo} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <span className="text-xl opacity-50">🌸</span>
          <span className="w-20 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          <span className="text-2xl">💕</span>
          <span className="w-20 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          <span className="text-xl opacity-50">🌸</span>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-5deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
};

/**
 * PhotoCard Component
 * Individual photo card with hover effects and decorative styling
 */
const PhotoCard = ({ photo, index }) => {
  // Determine grid span based on index for visual variety (20 photos layout)
  const getGridClass = () => {
    switch (index) {
      // Row 1
      case 0:
        return "col-span-2 row-span-2"; // Large square
      case 1:
        return "col-span-2 row-span-1"; // Wide
      case 2:
        return "col-span-2 row-span-2"; // Large square
      case 3:
        return "col-span-2 row-span-1"; // Wide

      // Row 2
      case 4:
        return "col-span-2 row-span-1"; // Wide
      case 5:
        return "col-span-2 row-span-2"; // Large square

      // Row 3
      case 6:
        return "col-span-3 row-span-2"; // Extra wide
      case 7:
        return "col-span-1 row-span-2"; // Tall
      case 8:
        return "col-span-2 row-span-2"; // Large square
      case 9:
        return "col-span-2 row-span-1"; // Wide

      // Row 4
      case 10:
        return "col-span-1 row-span-2"; // Tall
      case 11:
        return "col-span-2 row-span-1"; // Wide
      case 12:
        return "col-span-2 row-span-2"; // Large square
      case 13:
        return "col-span-1 row-span-2"; // Tall

      // Row 5
      case 14:
        return "col-span-2 row-span-2"; // Large square
      case 15:
        return "col-span-2 row-span-1"; // Wide
      case 16:
        return "col-span-1 row-span-2"; // Tall
      case 17:
        return "col-span-1 row-span-2"; // Tall

      // Row 6
      case 18:
        return "col-span-3 row-span-2"; // Extra wide
      case 19:
        return "col-span-3 row-span-2"; // Extra wide

      default:
        return "col-span-2 row-span-1";
    }
  };

  return (
    <div
      className={`${getGridClass()} relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500`}
    >
      {/* Decorative border on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-pink-200 transition-colors duration-300 z-10 pointer-events-none" />

      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          // Hide broken image, show placeholder
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />

      {/* Fallback placeholder */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 hidden items-center justify-center"
        style={{ display: "none" }}
      >
        <div className="text-center">
          <span className="text-4xl block mb-2">🌸</span>
          <span className="text-pink-400 text-sm">Photo {index + 1}</span>
        </div>
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Heart accent on hover */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-white text-lg drop-shadow-lg">♡</span>
      </div>

      {/* Flower accent on hover - top left */}
      <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
        <span className="text-white text-sm drop-shadow-lg">🌸</span>
      </div>
    </div>
  );
};

export default PhotoBento;
