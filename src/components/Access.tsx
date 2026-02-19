export default function Access() {
  return (
    <section id="access" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs tracking-[0.3em] text-brand-400 mb-3">
            ACCESS
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-wider text-brand-800">
            アクセス
          </h2>
          <div className="w-12 h-px bg-brand-300 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <div className="aspect-[4/3] bg-brand-50 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0!2d139.7107!3d35.6467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b43b8bfffff%3A0x0!2zV00gWUVCSVNV!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="店舗所在地の地図"
            />
          </div>

          {/* Access info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-lg text-brand-800 mb-6">
              店舗情報
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-wider text-brand-400 mb-1">
                  住所
                </p>
                <p className="text-sm text-brand-800/80 font-light">
                  〒150-0021
                  <br />
                  東京都渋谷区恵比寿西1丁目5番1号
                  <br />
                  WM YEBISU 502号室
                </p>
              </div>

              <div>
                <p className="text-xs tracking-wider text-brand-400 mb-1">
                  最寄り駅
                </p>
                <p className="text-sm text-brand-800/80 font-light">
                  JR恵比寿駅 西口より徒歩約3分
                  <br />
                  東京メトロ日比谷線 恵比寿駅より徒歩約5分
                </p>
              </div>

              <div>
                <p className="text-xs tracking-wider text-brand-400 mb-1">
                  営業時間
                </p>
                <p className="text-sm text-brand-800/80 font-light">
                  完全予約制
                  <br />
                  詳しくはお問い合わせください
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
