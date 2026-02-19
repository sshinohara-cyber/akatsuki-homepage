import Image from "next/image";

const companyInfo = [
  { label: "会社名", value: "株式会社暁（アカツキ）" },
  { label: "法人番号", value: "9011001174798" },
  { label: "代表取締役", value: "西片 聖里加" },
  { label: "資本金", value: "100万円" },
  { label: "所在地", value: "〒150-0013\n東京都渋谷区恵比寿1丁目32番15号" },
  {
    label: "事業内容",
    value:
      "サロン経営及び各種施術サービスの企画・運営 / ウェルネスコンサルティング / セラピスト・講師の育成 / イベント・セミナーの企画運営 / デジタルコンテンツの企画・制作・販売 / SNS・ウェブを活用したマーケティング支援",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs tracking-[0.3em] text-brand-400 mb-3">
            ABOUT
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-wider text-brand-800">
            会社概要
          </h2>
          <div className="w-12 h-px bg-brand-300 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/hero-sub.jpg"
              alt="AKATSUKIのブランドイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* Company info table */}
          <div>
            <p className="text-sm leading-relaxed text-brand-700/70 font-light mb-10">
              「暁」— 夜明けの光が差し込む、新しい始まりの瞬間。
              私たちは、お一人おひとりの中に眠る可能性と美しさを呼び覚まし、
              心身ともに輝く毎日をサポートいたします。
              美容、健康、瞑想、セルフケアを通じて、
              あなたらしい生き方への一歩を共に歩みます。
            </p>

            <div className="border-t border-brand-200/50">
              {companyInfo.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] border-b border-brand-200/50 py-4"
                >
                  <dt className="text-xs tracking-wider text-brand-500 font-medium pt-0.5">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-brand-800/80 font-light whitespace-pre-line">
                    {item.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
