import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./AuthProvider";
import { TopNav } from "./TopNav";

export const metadata: Metadata = {
  title: "TerraMemory — Археологические находки",
  description:
    "Платформа для ответственных гражданских археологических находок и работы экспертов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <TopNav />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-stone-200 bg-white/80">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-stone-500 md:flex-row md:items-center md:justify-between md:px-6">
                <span>
                  © {new Date().getFullYear()} TerraMemory. Сохранение культурного
                  наследия.
                </span>
                <div className="flex gap-3">
                  {/* ссылки-заглушки для будущих страниц */}
                  <a href="/about" className="hover:text-stone-700">
                    О проекте
                  </a>
                  <a href="/privacy" className="hover:text-stone-700">
                    Конфиденциальность
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
