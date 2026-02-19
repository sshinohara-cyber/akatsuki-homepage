import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-main.jpg"
          alt="木漏れ日の美しい自然の風景"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-brand-800 mb-4">
            AKATSUKI
          </h1>
          <div className="w-16 h-px bg-brand-400 mx-auto mb-4" />
          <p className="font-serif text-lg sm:text-xl tracking-[0.15em] text-brand-700">
            暁
          </p>
        </div>

        <p className="text-sm sm:text-base tracking-wider text-brand-800/80 font-light max-w-md mx-auto leading-relaxed">
          あなたの内なる輝きを、目覚めさせる
        </p>

        <div className="mt-12">
          <a
            href="#services"
            className="inline-block px-8 py-3 border border-brand-400 text-brand-700 text-sm tracking-widest hover:bg-brand-400/10 transition-colors"
          >
            VIEW MORE
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-brand-600/60">
          SCROLL
        </span>
        <div className="w-px h-8 bg-brand-400/40 animate-pulse" />
      </div>
    </section>
  );
}
