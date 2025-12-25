import React from "react";

/**
 * HeroSection Component
 * Beautifully decorated hero with flowers, floating animations, and elegant design
 * TextPressure will be installed via: npx shadcn@latest add @react-bits/TextPressure-JS-CSS
 */

// Import TextPressure after running the CLI command
// import TextPressure from "./ui/TextPressure";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-white to-pink-50/30 pointer-events-none" />

      {/* Floating flowers - Top area */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left cluster */}
        <div className="absolute top-10 left-[5%] text-5xl opacity-40 animate-float">
          🌸
        </div>
        <div className="absolute top-24 left-[12%] text-3xl opacity-30 animate-float-delayed">
          ✿
        </div>
        <div className="absolute top-16 left-[20%] text-4xl opacity-35 animate-float-slow">
          🌷
        </div>

        {/* Top right cluster */}
        <div className="absolute top-12 right-[8%] text-5xl opacity-40 animate-float-delayed">
          🌺
        </div>
        <div className="absolute top-28 right-[15%] text-3xl opacity-30 animate-float">
          💮
        </div>
        <div className="absolute top-20 right-[22%] text-4xl opacity-35 animate-float-slow">
          🌸
        </div>

        {/* Middle left */}
        <div className="absolute top-1/3 left-[3%] text-4xl opacity-25 animate-float-slow">
          🌹
        </div>
        <div className="absolute top-1/2 left-[6%] text-3xl opacity-20 animate-float">
          ✿
        </div>
        <div className="absolute top-[60%] left-[4%] text-5xl opacity-30 animate-float-delayed">
          🌷
        </div>

        {/* Middle right */}
        <div className="absolute top-1/3 right-[3%] text-4xl opacity-25 animate-float">
          💐
        </div>
        <div className="absolute top-1/2 right-[5%] text-3xl opacity-20 animate-float-delayed">
          🌸
        </div>
        <div className="absolute top-[60%] right-[4%] text-5xl opacity-30 animate-float-slow">
          🌺
        </div>

        {/* Bottom left cluster */}
        <div className="absolute bottom-32 left-[8%] text-5xl opacity-35 animate-float">
          🌸
        </div>
        <div className="absolute bottom-20 left-[15%] text-4xl opacity-30 animate-float-delayed">
          🌷
        </div>
        <div className="absolute bottom-40 left-[20%] text-3xl opacity-25 animate-float-slow">
          ✿
        </div>

        {/* Bottom right cluster */}
        <div className="absolute bottom-28 right-[10%] text-5xl opacity-35 animate-float-delayed">
          🌺
        </div>
        <div className="absolute bottom-16 right-[18%] text-4xl opacity-30 animate-float">
          💮
        </div>
        <div className="absolute bottom-36 right-[25%] text-3xl opacity-25 animate-float-slow">
          🌸
        </div>

        {/* Scattered sparkles */}
        <div className="absolute top-[15%] left-[30%] text-yellow-400 text-sm opacity-60 animate-pulse">
          ✦
        </div>
        <div className="absolute top-[25%] right-[35%] text-yellow-400 text-xs opacity-50 animate-pulse delay-100">
          ✦
        </div>
        <div className="absolute bottom-[30%] left-[25%] text-yellow-400 text-sm opacity-60 animate-pulse delay-200">
          ✦
        </div>
        <div className="absolute bottom-[20%] right-[30%] text-yellow-400 text-xs opacity-50 animate-pulse delay-300">
          ✦
        </div>
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Top flower decoration */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-2xl opacity-50 animate-float">🌷</span>
          <span className="text-3xl opacity-70 animate-float-delayed">🌸</span>
          <span className="text-4xl animate-float-slow">🌺</span>
          <span className="text-3xl opacity-70 animate-float-delayed">🌸</span>
          <span className="text-2xl opacity-50 animate-float">🌷</span>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          <span className="text-pink-400 text-sm">✿</span>
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
        </div>

        {/*
          After installing TextPressure, replace the h1 below with:
          <TextPressure
            text="Happy Birthday"
            fontFamily="Cormorant Garamond"
            fontUrl="https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYrEtFmSqn.woff2"
            textColor="#171717"
            width={true}
            weight={true}
            className="text-6xl md:text-8xl"
          />
        */}

        {/* Main Title */}
        <div className="relative inline-block">
          {/* Glow effect behind text */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 opacity-40 scale-110" />

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-800 mb-2 relative">
            Happy Birthday
          </h1>
        </div>

        {/* Name with special styling */}
        <div className="relative mt-2 mb-8">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-normal tracking-wide bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
            Tanushree!
          </h2>
          {/* Sparkles around name */}
          <span className="absolute -top-2 -left-4 md:left-0 text-yellow-400 text-lg animate-pulse">
            ✦
          </span>
          <span className="absolute -top-2 -right-4 md:right-0 text-yellow-400 text-lg animate-pulse delay-150">
            ✦
          </span>
        </div>

        {/* Heart divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-20 h-px bg-gradient-to-r from-transparent via-pink-300 to-pink-300" />
          <span className="text-rose-400 text-2xl animate-pulse">♡</span>
          <span className="w-20 h-px bg-gradient-to-l from-transparent via-pink-300 to-pink-300" />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral-500 font-light tracking-wide mb-6">
          Thankyou for being my best friend!
        </p>

        {/* Decorative hearts */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-pink-300 text-lg animate-float">💕</span>
          <span className="text-rose-400 text-xl animate-float-delayed">
            💖
          </span>
          <span className="text-pink-400 text-2xl animate-float-slow">💗</span>
          <span className="text-rose-400 text-xl animate-float-delayed">
            💖
          </span>
          <span className="text-pink-300 text-lg animate-float">💕</span>
        </div>

        {/* Bottom flower accent */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-pink-300 text-sm">—</span>
          <span className="text-xl">🌸</span>
          <span className="text-rose-400">♡</span>
          <span className="text-xl">🌸</span>
          <span className="text-pink-300 text-sm">—</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-lg opacity-40">🌷</span>
          <span className="text-xl opacity-60">🌸</span>
          <span className="text-lg opacity-40">🌷</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-neutral-400">
          <span className="text-xs tracking-widest uppercase">Scroll down</span>
          <div className="animate-bounce">
            <svg
              className="w-5 h-5 text-pink-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

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

        .delay-150 {
          animation-delay: 150ms;
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

export default HeroSection;
