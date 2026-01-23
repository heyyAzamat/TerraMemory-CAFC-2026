"use client";

import Link from "next/link";
import { useAuth } from "./AuthProvider";

export function TopNav() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-700 via-amber-500 to-emerald-600 shadow-sm" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-700">
              TerraMemory
            </span>
            <span className="text-xs text-stone-500">археологические находки</span>
          </div>
        </Link>
        <nav className="flex items-center gap-3 text-sm md:gap-4">
          <Link
            href="/map"
            className="rounded-full px-3 py-1.5 text-stone-700 hover:bg-stone-100"
          >
            Карта
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full px-3 py-1.5 text-stone-700 hover:bg-stone-100"
          >
            Мои находки
          </Link>
          <Link
            href="/expert"
            className="hidden rounded-full px-3 py-1.5 text-stone-700 hover:bg-stone-100 md:inline-flex"
          >
            Для экспертов
          </Link>
          {!user && (
            <Link
              href="/auth/login"
              className="rounded-full border border-stone-300 bg-white px-4 py-1.5 text-sm font-medium text-stone-800 shadow-sm hover:border-stone-400 hover:bg-stone-50"
            >
              Войти
            </Link>
          )}
          {user && (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="hidden rounded-full bg-stone-900 px-3 py-1.5 text-xs font-medium text-stone-50 hover:bg-stone-950 md:inline-flex"
              >
                Кабинет
              </Link>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-800 shadow-sm hover:border-stone-400 hover:bg-stone-50"
                onClick={logout}
              >
                <span className="hidden truncate max-w-[120px] text-ellipsis md:inline">
                  {user.name}
                </span>
                <span className="md:hidden">Выйти</span>
                <span className="hidden text-stone-400 md:inline">Выйти</span>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

