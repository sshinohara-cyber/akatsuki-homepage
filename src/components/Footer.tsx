export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl tracking-[0.2em] text-white mb-4">
              AKATSUKI
            </p>
            <p className="text-xs leading-relaxed">
              株式会社暁
              <br />
              東京都渋谷区恵比寿西1丁目5番1号
              <br />
              WM YEBISU 502号室
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-4">MENU</p>
            <nav className="space-y-2">
              <a
                href="#services"
                className="block text-xs hover:text-white transition-colors"
              >
                サービス
              </a>
              <a
                href="#about"
                className="block text-xs hover:text-white transition-colors"
              >
                会社概要
              </a>
              <a
                href="#access"
                className="block text-xs hover:text-white transition-colors"
              >
                アクセス
              </a>
              <a
                href="#contact"
                className="block text-xs hover:text-white transition-colors"
              >
                お問い合わせ
              </a>
            </nav>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-4">INFO</p>
            <p className="text-xs leading-relaxed">
              完全予約制
              <br />
              詳しくはお問い合わせください
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} 株式会社暁 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
