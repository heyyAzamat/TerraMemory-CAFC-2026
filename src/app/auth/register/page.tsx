
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../AuthProvider";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    register({ name, email });
    router.push("/dashboard");
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-4 py-10 md:px-0">
      <header className="space-y-1 text-center">
        <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
          Регистрация
        </h1>
        <p className="text-sm text-stone-600">
          Создайте базовый аккаунт участника. После регистрации вы сразу
          попадёте в личный кабинет с заявками.
        </p>
      </header>

      <div className="space-y-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-stone-700">
              Имя или псевдоним
            </label>
            <input
              type="text"
              placeholder="Как к вам обращаться"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-stone-400 focus:bg-white focus:ring-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-medium text-emerald-50 shadow-sm shadow-emerald-300/50 hover:bg-emerald-800"
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="border-t border-stone-100 pt-4 text-center text-[11px] text-stone-500">
          Уже есть аккаунт?{" "}
          <a
            href="/auth/login"
            className="font-medium text-stone-800 underline-offset-2 hover:underline"
          >
            Войти
          </a>
        </p>
      </div>
    </div>
  );
}

