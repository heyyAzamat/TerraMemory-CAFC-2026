
"use client";

import { useAuth } from "../AuthProvider";

const mockFindings = [
  {
    id: "1",
    title: "Фрагменты керамики на пашне",
    status: "На рассмотрении",
    statusColor: "bg-amber-500",
    date: "12.04.2025",
    depth: "до 30 см",
  },
  {
    id: "2",
    title: "Металлический предмет, похожий на украшение",
    status: "Перспективно",
    statusColor: "bg-emerald-500",
    date: "03.03.2025",
    depth: "на поверхности",
  },
  {
    id: "3",
    title: "Костяные фрагменты в овраге",
    status: "Требуется выезд",
    statusColor: "bg-sky-500",
    date: "17.01.2026",
    depth: "глубже 30 см",
  },
];

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:px-6">
        <header className="space-y-2">
          <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
            Личный кабинет
          </h1>
          <p className="text-sm text-stone-600">
            Чтобы увидеть свои находки и статусы проверок, войдите в аккаунт
            или зарегистрируйтесь.
          </p>
        </header>
        <div className="space-y-3 rounded-2xl border border-dashed border-stone-200 bg-white p-5 text-sm text-stone-700 shadow-sm">
          <p>
            В демо-версии после входа или регистрации вы увидите пример
            заполненного кабинета с тестовыми заявками.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="/auth/login"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 hover:bg-stone-950"
            >
              Войти
            </a>
            <a
              href="/auth/register"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium text-stone-800 hover:border-stone-400 hover:bg-stone-50"
            >
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
      <header className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
            Мои находки
          </h1>
          <p className="mt-1 text-sm text-stone-600">
            {user.name}, здесь будет ваша личная история заявок, статусы
            проверки и комментарии экспертов. Сейчас показан демонстрационный
            список.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/findings/new"
            className="inline-flex items-center justify-center rounded-full bg-amber-700 px-4 py-2 text-sm font-medium text-amber-50 shadow-sm shadow-amber-300/50 hover:bg-amber-800"
          >
            Сообщить о новой находке
          </a>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-stone-900">
              История заявок (макет)
            </h2>
            <span className="text-xs text-stone-500">
              Всего заявок: {mockFindings.length}
            </span>
          </div>
          <div className="divide-y divide-stone-100">
            {mockFindings.map((f) => (
              <article
                key={f.id}
                className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 md:flex-row md:items-center md:justify-between"
              >
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-stone-900">
                    {f.title}
                  </h3>
                  <p className="text-xs text-stone-500">
                    Дата обнаружения: {f.date} · Глубина: {f.depth}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-stone-50 px-2.5 py-1 text-[11px] text-stone-700">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${f.statusColor}`}
                    />
                    {f.status}
                  </span>
                  <button className="rounded-full border border-stone-200 px-3 py-1 text-[11px] font-medium text-stone-700 hover:bg-stone-50">
                    Открыть заявку
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-3 rounded-2xl border border-stone-200 bg-white p-4 text-sm text-stone-700 shadow-sm md:p-5">
          <h2 className="text-sm font-semibold text-stone-900">
            Ваш ответственный вклад
          </h2>
          <p className="text-sm text-stone-600">
            В будущей версии здесь появится статистика: сколько находок было
            признано перспективными, каков вклад в исследования по регионам и
            периодам.
          </p>
          <div className="space-y-2 rounded-2xl bg-emerald-50 p-3 text-xs text-emerald-900">
            <p className="font-medium">Принципы безопасной подачі заявок</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>не разглашать точное место особо уязвимых объектов;</li>
              <li>описывать контекст находки как можно честнее и спокойнее;</li>
              <li>не пытаться самостоятельно извлекать предметы из грунта.</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

