"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-warm-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs tracking-[0.3em] text-brand-400 mb-3">
            CONTACT
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-wider text-brand-800">
            お問い合わせ
          </h2>
          <div className="w-12 h-px bg-brand-300 mx-auto mt-6" />
          <p className="text-sm text-brand-700/60 font-light mt-6">
            ご予約・ご質問など、お気軽にお問い合わせください
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <p className="font-serif text-lg text-brand-800 mb-2">
              送信ありがとうございます
            </p>
            <p className="text-sm text-brand-700/60 font-light">
              内容を確認の上、折り返しご連絡いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs tracking-wider text-brand-500 mb-2"
              >
                お名前 <span className="text-brand-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-brand-200/50 text-sm text-brand-800 placeholder-brand-300 focus:outline-none focus:border-brand-400 transition-colors"
                placeholder="山田 花子"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs tracking-wider text-brand-500 mb-2"
              >
                メールアドレス <span className="text-brand-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-brand-200/50 text-sm text-brand-800 placeholder-brand-300 focus:outline-none focus:border-brand-400 transition-colors"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs tracking-wider text-brand-500 mb-2"
              >
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-white border border-brand-200/50 text-sm text-brand-800 placeholder-brand-300 focus:outline-none focus:border-brand-400 transition-colors"
                placeholder="090-1234-5678"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs tracking-wider text-brand-500 mb-2"
              >
                お問い合わせ種別
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-white border border-brand-200/50 text-sm text-brand-800 focus:outline-none focus:border-brand-400 transition-colors"
              >
                <option value="">選択してください</option>
                <option value="reservation">ご予約</option>
                <option value="consultation">カウンセリング</option>
                <option value="seminar">セミナー・イベント</option>
                <option value="training">セラピスト育成</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs tracking-wider text-brand-500 mb-2"
              >
                メッセージ <span className="text-brand-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-brand-200/50 text-sm text-brand-800 placeholder-brand-300 focus:outline-none focus:border-brand-400 transition-colors resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block px-12 py-3 bg-brand-500 text-white text-sm tracking-widest hover:bg-brand-600 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
