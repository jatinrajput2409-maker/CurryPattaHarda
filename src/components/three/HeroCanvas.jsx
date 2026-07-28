import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Sparkles, RefreshCw, ChefHat, CheckCircle2 } from 'lucide-react';

export default function HeroCanvas() {
  const [progress, setProgress] = useState(0); // 0.0 to 1.0 over 5s
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const containerRef = useRef(null);
  const lastTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  // 5 Distinct HD Real Food Photography Steps of Dosa Making Process
  const dosaProcessSteps = [
    {
      step: 1,
      title: '1. Stone-Ground Batter Spreading',
      subtitle: 'Tawa Swirl & Batter Spread',
      desc: 'Fermented urad dal & rice batter poured and swirled in concentric circles over hot cast-iron tawa.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=85',
      badge: 'Step 1 • Tawa Batter Swirl',
    },
    {
      step: 2,
      title: '2. Pure A2 Desi Ghee & Podi Sizzle',
      subtitle: 'Organic Ghee & Spice Roasting',
      desc: 'Drizzled with pure A2 cow ghee, sizzling with roasted red chilli podi seasoning and mustard oil.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85',
      badge: 'Step 2 • Ghee & Podi Sizzle',
    },
    {
      step: 3,
      title: '3. Golden Crispy Tawa Roast & Fold',
      subtitle: 'Paper-Crisp Tawa Roll',
      desc: 'Edges turn golden brown and paper-crisp, skillfully lifted with wooden spatula and rolled into a cone.',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85',
      badge: 'Step 3 • Golden Crisp Fold',
    },
    {
      step: 4,
      title: '4. Artisan Chutneys & Sambar Plating',
      subtitle: 'Dip & Sauce Assembly',
      desc: 'Plated alongside fresh white coconut chutney, spicy red tomato dip, and hot piping lentil sambar.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=85',
      badge: 'Step 4 • Chutney & Sambar Dip',
    },
    {
      step: 5,
      title: '5. Curry Patta Masterpiece Ready',
      subtitle: 'Garnished & Served Hot',
      desc: 'Garnished with aromatic tempered curry leaves. Crispy Masala Dosa Platter ready to serve!',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1400&q=90',
      badge: 'Step 5 • Serve Hot!',
    },
  ];

  // 5-Second Loop Timer
  useEffect(() => {
    const animate = (time) => {
      if (lastTimeRef.current !== null && isPlaying) {
        const delta = (time - lastTimeRef.current) / 1000;
        setProgress((prev) => {
          const next = prev + delta / 5.0; // 5.0 seconds total loop
          return next >= 1.0 ? 0.0 : next;
        });
      }
      lastTimeRef.current = time;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  // 3D Parallax Tilt Effect on Mouse Move
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rY = ((x / rect.width) - 0.5) * 12;
    const rX = ((y / rect.height) - 0.5) * -12;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const currentStepIndex = Math.min(
    Math.floor(progress * dosaProcessSteps.length),
    dosaProcessSteps.length - 1
  );
  const currentStep = dosaProcessSteps[currentStepIndex];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="w-full h-[460px] md:h-[590px] relative"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
        className="w-full h-full relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] border-2 border-[#F36F21]/40 bg-[#1A1615]"
      >
        {/* Distinct Food Photo Layer with Cross-Fade */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentStep.step}
              src={currentStep.image}
              alt={currentStep.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-[#1A1615]/50 to-transparent pointer-events-none z-10" />
        </div>

        {/* Top Live Step Indicator Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-[#F36F21]/30">
          <Flame className="w-4 h-4 text-[#F36F21] animate-bounce" />
          <span className="text-xs font-black text-[#1A1615] uppercase tracking-wider">
            Step {currentStep.step} of 5 • Dosa Crafting
          </span>
        </div>

        {/* Step Content Overlay */}
        <div className="absolute inset-x-0 bottom-24 z-20 p-6 sm:p-8 flex flex-col justify-end pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-1.5 max-w-xl pointer-events-auto"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#38A128] via-[#EBA826] to-[#F36F21] text-white px-3.5 py-1 rounded-full text-xs font-extrabold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>{currentStep.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white drop-shadow-md">
                {currentStep.title}
              </h3>

              <p className="text-xs sm:text-sm text-brand-grey font-medium leading-relaxed drop-shadow">
                {currentStep.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5-Second Live Progress Control Bar */}
        <div className="absolute bottom-3 left-4 right-4 z-30 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#F36F21]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              setProgress(0);
              setIsPlaying(true);
            }}
            className="text-xs font-extrabold text-white bg-gradient-to-r from-[#38A128] via-[#EBA826] to-[#F36F21] px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Replay 5s Crafting</span>
          </button>

          <div className="flex-1 w-full flex flex-col gap-1">
            <div className="flex items-center justify-between text-[11px] font-extrabold text-[#1A1615]">
              <span>{currentStep.badge}</span>
              <span className="text-[#F36F21] font-bold">{(progress * 5).toFixed(1)}s / 5.0s</span>
            </div>

            {/* 5 Interactive Step Dots / Segment Bars */}
            <div className="grid grid-cols-5 gap-1.5 w-full">
              {dosaProcessSteps.map((step, idx) => {
                const isCompleted = currentStepIndex > idx;
                const isCurrent = currentStepIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setProgress(idx / 5.0);
                    }}
                    title={`Jump to ${step.badge}`}
                    className="h-2.5 bg-gray-200 rounded-full overflow-hidden relative cursor-pointer group"
                  >
                    <div
                      className={`h-full transition-all duration-75 ${
                        isCompleted
                          ? 'bg-[#38A128] w-full'
                          : isCurrent
                          ? 'bg-gradient-to-r from-[#38A128] via-[#EBA826] to-[#F36F21]'
                          : 'w-0'
                      }`}
                      style={{
                        width: isCurrent
                          ? `${((progress * 5 - idx) * 100).toFixed(0)}%`
                          : isCompleted
                          ? '100%'
                          : '0%',
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
