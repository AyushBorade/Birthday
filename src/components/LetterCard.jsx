import React, { useState } from "react";

/**
 * LetterCard Component
 * A beautifully decorated flip card with rotating glow border and flower decorations
 * Features smooth 3D flip animation with elegant aesthetic design
 */
const LetterCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent" />

        {/* Floating flowers - top */}
        <div className="absolute top-10 left-[10%] text-4xl opacity-40 animate-float">
          🌸
        </div>
        <div className="absolute top-20 left-[25%] text-3xl opacity-30 animate-float-delayed">
          ✿
        </div>
        <div className="absolute top-16 right-[20%] text-4xl opacity-40 animate-float">
          🌷
        </div>
        <div className="absolute top-8 right-[10%] text-3xl opacity-30 animate-float-delayed">
          💮
        </div>

        {/* Floating flowers - middle */}
        <div className="absolute top-1/3 left-[5%] text-3xl opacity-25 animate-float-slow">
          🌺
        </div>
        <div className="absolute top-1/2 right-[5%] text-3xl opacity-25 animate-float-slow">
          🌸
        </div>

        {/* Floating flowers - bottom */}
        <div className="absolute bottom-20 left-[15%] text-4xl opacity-35 animate-float">
          💐
        </div>
        <div className="absolute bottom-16 left-[30%] text-3xl opacity-25 animate-float-delayed">
          ✿
        </div>
        <div className="absolute bottom-24 right-[25%] text-3xl opacity-30 animate-float">
          🌹
        </div>
        <div className="absolute bottom-12 right-[10%] text-4xl opacity-35 animate-float-delayed">
          🌸
        </div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section header with flower decorations */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-2xl opacity-60">✿</span>
            <span className="text-3xl">🌸</span>
            <span className="text-2xl opacity-60">✿</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-neutral-800 mb-4">
            Aapke liye kuch shabd
          </h2>
          <p className="text-neutral-500 font-light tracking-wide">
            Click to open my heart
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
            <span className="text-pink-400">♡</span>
            <span className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          </div>
        </div>

        {/* Flip Card Container with rotating glow */}
        <div className="relative">
          {/* Rotating glow border */}
          <div className="absolute -inset-1 rounded-3xl overflow-hidden">
            <div
              className={`absolute inset-0 ${isFlipped ? "animate-spin-slow" : "animate-spin-slower"}`}
              style={{
                background:
                  "conic-gradient(from 0deg, #fda4af, #f9a8d4, #f0abfc, #d8b4fe, #c4b5fd, #a5b4fc, #93c5fd, #7dd3fc, #67e8f9, #5eead4, #6ee7b7, #86efac, #a3e635, #facc15, #fbbf24, #fb923c, #f87171, #fda4af)",
              }}
            />
          </div>

          {/* Inner glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 rounded-3xl blur-sm opacity-60" />

          {/* Card container */}
          <div
            className={`flip-card w-full h-[480px] md:h-[580px] cursor-pointer relative ${
              isFlipped ? "flipped" : ""
            }`}
            onClick={handleFlip}
          >
            <div className="flip-card-inner">
              {/* Front of card - Decorated Envelope */}
              <div className="flip-card-front p-8 md:p-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-100 relative overflow-hidden">
                {/* Decorative corner flowers */}
                <div className="absolute top-4 left-4 text-2xl opacity-50">
                  🌸
                </div>
                <div className="absolute top-4 right-4 text-2xl opacity-50">
                  🌸
                </div>
                <div className="absolute bottom-4 left-4 text-2xl opacity-50">
                  🌸
                </div>
                <div className="absolute bottom-4 right-4 text-2xl opacity-50">
                  🌸
                </div>

                {/* Decorative top border */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-1">
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent rounded-full" />
                </div>

                {/* Envelope with heart seal */}
                <div className="relative mb-8">
                  <div className="w-32 h-24 md:w-40 md:h-28 relative">
                    {/* Envelope body */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg border border-pink-200 shadow-inner" />
                    {/* Envelope flap */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-rose-100 to-pink-100 rounded-t-lg border-b border-pink-200"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      }}
                    />
                    {/* Heart seal */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">♡</span>
                    </div>
                  </div>

                  {/* Sparkles around envelope */}
                  <div className="absolute -top-2 -left-2 text-yellow-400 text-sm animate-pulse">
                    ✦
                  </div>
                  <div className="absolute -top-1 -right-3 text-yellow-400 text-xs animate-pulse delay-100">
                    ✦
                  </div>
                  <div className="absolute -bottom-1 -left-3 text-yellow-400 text-xs animate-pulse delay-200">
                    ✦
                  </div>
                  <div className="absolute -bottom-2 -right-2 text-yellow-400 text-sm animate-pulse delay-300">
                    ✦
                  </div>
                </div>

                {/* Front text */}
                <p className="font-display text-3xl md:text-4xl text-neutral-700 mb-3 tracking-wide">
                  For You
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-pink-300">—</span>
                  <span className="text-rose-400 text-xl">♡</span>
                  <span className="text-pink-300">—</span>
                </div>
                <p className="text-neutral-400 text-sm italic">my love</p>

                {/* Hint with animation */}
                <div className="absolute bottom-8 flex flex-col items-center gap-2">
                  <p className="text-neutral-400 text-xs tracking-widest uppercase">
                    tap to read
                  </p>
                  <div className="animate-bounce">
                    <svg
                      className="w-4 h-4 text-pink-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Decorative bottom flowers */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-1 opacity-40">
                  <span className="text-lg">🌷</span>
                  <span className="text-xl">🌸</span>
                  <span className="text-2xl">🌺</span>
                  <span className="text-xl">🌸</span>
                  <span className="text-lg">🌷</span>
                </div>
              </div>

              {/* Back of card - Letter content */}
              <div className="flip-card-back p-6 md:p-10 flex flex-col bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-100 overflow-hidden relative">
                {/* Decorative corner flowers */}
                <div className="absolute top-3 left-3 text-xl opacity-40">
                  🌸
                </div>
                <div className="absolute top-3 right-3 text-xl opacity-40">
                  🌸
                </div>

                {/* Decorative header */}
                <div className="flex items-center justify-center gap-2 mb-4 pb-4 border-b border-pink-100">
                  <span className="text-pink-300 text-sm">✿</span>
                  <span className="text-rose-400">♡</span>
                  <span className="text-pink-300 text-sm">✿</span>
                </div>

                {/* Letter content - scrollable */}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <p className="font-display text-xl md:text-2xl text-neutral-800 mb-6 leading-relaxed">
                    My Kuchikuchi 🫶🏻,
                  </p>

                  <div className="space-y-4 text-neutral-600 leading-relaxed text-sm md:text-base">
                    <p>
                      Its your Birthday!!!! 🎉 Happy Birthday to you! You're
                      grown up now, teenage khatam ho gayi, but I'll still like
                      your bachpana for my whole life. Thankyou for being there
                      for me in every aspect, tu nahi hoti to mai aisa naa hota,
                      thankyou for your presence. My thought process starts with
                      you, jo kuch bhi kuch accha dekhta hu karta hu hamesha
                      teri yaad aati hai ki tu hoti to tujhe pasand aata. You're
                      like a Silicon chip to my motherboard, you're my heart, my
                      soul, my everything. I can't function without you.
                    </p>

                    <p>
                      Sorry and thankyou for tolerating meri harkate, mere wajah
                      se tujhe bura lagta hai uske liye maaf kar dena, 20th it
                      is, wish you a very successful and life full of happiness
                      ahead, also healthy. Tujhse 2 din na milu to accha nahi
                      lagta, bechaini honi lagti hai. Fir teri yaad me mujhe
                      tere baalo ke nashe karne padte hai, and I love the
                      fragrance of your body, hair and the whole you. I want to
                      surrender myself, my life and my everything to you. I know
                      physical paper would have more signifance to you but this
                      is my way of expressing.
                    </p>

                    <p>
                      Birthdayy haii, saal bhar manayenge, saare Birthday saath
                      me manayenge. I am always there for you, har wakt har
                      situation mein. Mera kuch nahi hua to mai tere bharose
                      baith jaaunga, issliye acche se padhai shuru rakh. Tere
                      baalo ki khushboo, teri qamar ka arc, the feel of your
                      thighs, tere paas aate hi nind aana, tere paas aate hi
                      tujhe khaane ki iccha hona, ye sab se addict ho chuka hu
                      mai, nashe me chale jaata hu. At last Have a wonderful
                      Year ahead, may be full of challenges, but I know you will
                      overcome nicely. All my Good things to you. Proud of you,
                      my love.
                    </p>

                    <p className="text-neutral-700 font-medium">
                      Happy Birthday, my love. Aaj yaa kal, hamesha tu mere liye
                      sab kuch rahegi. 💕
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-8 text-right border-t border-pink-100 pt-6">
                    <p className="font-display text-lg text-neutral-700 italic mb-1">
                      Forever & Always yours,
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-rose-400 text-2xl">♡</span>
                      <span className="text-pink-300">🌸</span>
                    </div>
                  </div>
                </div>

                {/* Hint to flip back */}
                <div className="text-center mt-4 pt-4 border-t border-pink-100">
                  <p className="text-neutral-400 text-xs tracking-widest uppercase flex items-center justify-center gap-2">
                    <span className="text-pink-300">✿</span>
                    tap to close
                    <span className="text-pink-300">✿</span>
                  </p>
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-30">
                  <span className="text-sm">🌷</span>
                  <span className="text-base">🌸</span>
                  <span className="text-sm">🌷</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <span className="text-xl opacity-50">🌸</span>
          <span className="w-20 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          <span className="text-2xl">💕</span>
          <span className="w-20 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          <span className="text-xl opacity-50">🌸</span>
        </div>
      </div>

      {/* Custom styles for animations and scrollbar */}
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

        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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

        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fce7f3;
          border-radius: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f9a8d4, #f472b6);
          border-radius: 2px;
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

export default LetterCard;
