export default function MapPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-4 px-4 py-6 md:px-6 md:py-8">
      <header className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-stone-100 md:text-2xl">
            Карта находок
          </h1>
          <p className="mt-1 text-sm text-stone-300">
            Интерактивная карта для изучения сообщений о возможных археологических находках.
            В этой версии отображается прототип интерфейса без реальных данных.
          </p>
        </div>
        <a
          href="/findings/new"
          className="inline-flex items-center justify-center rounded-full bg-amber-700 px-4 py-2 text-sm font-medium text-amber-50 shadow-sm shadow-amber-300/50 hover:bg-amber-800"
        >
          Сообщить о находке
        </a>
      </header>

      <div className="grid flex-1 gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-200 via-stone-100 to-emerald-100 shadow-sm md:min-h-[480px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(15,23,42,0.12),transparent_50%),radial-gradient(circle_at_90%_100%,rgba(15,118,110,0.15),transparent_55%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between px-4 py-3 text-xs text-stone-700">
              <span className="rounded-full bg-white/70 px-3 py-1 font-medium shadow-sm">
                Прототип карты (Mapbox / OSM)
              </span>
              <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span>заявки на рассмотрении</span>
              </div>
            </div>
            <div className="relative mx-4 mb-4 flex-1 rounded-xl border border-stone-300/70 bg-white/70 shadow-inner">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-y-6 left-1/2 w-px bg-stone-200" />
                <div className="absolute inset-x-6 top-1/2 h-px bg-stone-200" />
                <div className="absolute left-16 top-12 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                <div className="absolute left-44 top-24 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.9)]" />
                <div className="absolute left-32 top-40 h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
                <div className="absolute left-56 top-32 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
              </div>
              <div className="absolute bottom-3 left-3 flex gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] text-stone-700 shadow-sm">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> новые
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> перспективно
                </span>
              </div>
              <div className="absolute bottom-3 right-3 flex gap-1 text-[10px] text-stone-500">
                <span className="rounded bg-white/80 px-2 py-1 shadow-sm">−</span>
                <span className="rounded bg-white/80 px-2 py-1 shadow-sm">+</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-stone-900">Фильтры</h2>
            <button className="text-xs text-stone-500 hover:text-stone-700">
              Сбросить
            </button>
          </div>
          <div className="space-y-4 text-sm">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-700">
                Тип объекта
              </label>
              <select className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:bg-white focus:ring-2">
                <option>Все типы</option>
                <option>Керамика</option>
                <option>Металл</option>
                <option>Камень</option>
                <option>Кость</option>
                <option>Неизвестно</option>
              </select>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700">
                  Статус
                </label>
                <select className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:bg-white focus:ring-2">
                  <option>Все</option>
                  <option>На рассмотрении</option>
                  <option>Перспективно</option>
                  <option>Требуется выезд</option>
                  <option>Отклонено</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700">
                  Период
                </label>
                <select className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:bg-white focus:ring-2">
                  <option>За всё время</option>
                  <option>Последний месяц</option>
                  <option>Последний год</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-700">
                Регион (прототип)
              </label>
              <input
                type="text"
                placeholder="Например, Нижнее Поволжье"
                className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-stone-400 focus:bg-white focus:ring-2"
              />
            </div>
          </div>
          <div className="mt-2 space-y-2 border-t border-stone-100 pt-3 text-xs text-stone-600">
            <p className="font-medium text-stone-800">Список последних заявок (макет)</p>
            <ul className="space-y-1.5">
              <li className="flex items-center justify-between rounded-xl border border-stone-100 bg-stone-50 px-3 py-2">
                <div>
                  <p className="text-xs font-medium text-stone-900">
                    Фрагменты керамики
                  </p>
                  <p className="text-[11px] text-stone-500">
                    на рассмотрении · глубина до 30 см
                  </p>
                </div>
                <span className="h-2 w-2 rounded-full bg-amber-500" />
              </li>
              <li className="flex items-center justify-between rounded-xl border border-stone-100 bg-stone-50 px-3 py-2">
                <div>
                  <p className="text-xs font-medium text-stone-900">
                    Обработанный каменный орудийный фрагмент
                  </p>
                  <p className="text-[11px] text-stone-500">
                    перспективно · берег реки
                  </p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </li>
            </ul>
            <p className="text-[11px] text-stone-500">
              В реальной версии здесь будут данные с сервера и интерактивная синхронизация
              списка с картой.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

