import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "株式会社暁 | AKATSUKI - ウェルネス＆ビューティーサロン",
  description:
    "東京・恵比寿のウェルネス＆ビューティーサロン。美容、健康、瞑想、セルフケアを通じて、あなたの内なる輝きを引き出します。",
  keywords: "暁, AKATSUKI, ウェルネス, ビューティー, サロン, 恵比寿, 美容, 健康, 瞑想",
  openGraph: {
    title: "株式会社暁 | AKATSUKI",
    description: "東京・恵比寿のウェルネス＆ビューティーサロン",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
