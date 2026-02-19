const services = [
  {
    title: "サロン施術",
    subtitle: "Salon Treatment",
    description:
      "お一人おひとりの状態に合わせた施術で、心身のバランスを整えます。美容・健康・リラクゼーションを融合した独自のアプローチで、あなた本来の美しさと健やかさを引き出します。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "ウェルネスコンサルティング",
    subtitle: "Wellness Consulting",
    description:
      "健康、美容、瞑想、セルフケアに関する専門的なアドバイスを提供。ライフスタイル全体を見つめ直し、日常に取り入れられるウェルネス習慣をご提案いたします。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "セラピスト育成",
    subtitle: "Therapist Training",
    description:
      "次世代のセラピスト・講師の育成を行っています。技術指導だけでなく、マインドセットやビジネススキルも含めた包括的なプログラムで、プロフェッショナルとしての成長をサポートします。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "イベント・セミナー",
    subtitle: "Events & Seminars",
    description:
      "講演会、セミナー、ワークショップなど、学びと体験の場を企画・運営しています。ウェルネスの知識を深め、同じ志を持つ仲間とつながる機会をお届けします。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs tracking-[0.3em] text-brand-400 mb-3">
            SERVICES
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-wider text-brand-800">
            サービス
          </h2>
          <div className="w-12 h-px bg-brand-300 mx-auto mt-6" />
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 sm:p-10 bg-warm-50 border border-brand-100/30 hover:border-brand-200/50 transition-all duration-300"
            >
              <div className="text-brand-400 mb-6">{service.icon}</div>
              <h3 className="font-serif text-lg sm:text-xl text-brand-800 mb-1">
                {service.title}
              </h3>
              <p className="text-xs tracking-widest text-brand-400 mb-4">
                {service.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-brand-700/70 font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
