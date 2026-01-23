
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../AuthProvider";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // В демо-версии мы не проверяем пароль, а просто "входим" и переходим в кабинет
    login({ email });
    router.push("/dashboard");
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-4 py-10 md:px-0">
      <header className="space-y-1 text-center">
        <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
          Вход в аккаунт
        </h1>
        <p className="text-sm text-stone-600">
          В демо-версии достаточно указать email, чтобы войти и увидеть личный
          кабинет.
        </p>
      </header>

      <div className="space-y-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-stone-700">
              Электронная почта
            </label>
            <input
              type="email"
              placeholder="you@example.org"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-stone-400 focus:bg-white focus:ring-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-stone-700">
              Пароль
            </label>
            <input
              type="password"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:bg-white focus:ring-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 hover:bg-stone-950"
          >
            Войти
          </button>
        </form>

        <div className="space-y-3 border-t border-stone-100 pt-4 text-xs text-stone-600">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-2.5 text-xs font-medium text-stone-800 hover:border-stone-400 hover:bg-stone-50"
          >
            Войти через Google (макет)
          </button>
          <p className="text-center text-[11px] text-stone-500">
            Нет аккаунта?{" "}
            <a
              href="/auth/register"
              className="font-medium text-stone-800 underline-offset-2 hover:underline"
            >
              Зарегистрируйтесь
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

