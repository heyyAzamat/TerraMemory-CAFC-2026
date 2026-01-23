const mockExpertItems = [
  {
    id: "e1",
    title: "Керамика с орнаментом, сельхозполе",
    status: "На рассмотрении",
    type: "Керамика",
    region: "Южный район",
  },
  {
    id: "e2",
    title: "Костяные фрагменты, обрыв реки",
    status: "Требуется выезд",
    type: "Кость",
    region: "Северный берег",
  },
];

export default function ExpertPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
      <header className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
            Панель эксперта
          </h1>
          <p className="mt-1 text-sm text-stone-600">
            Прототип рабочего места археолога: карта заявок, фильтры и список
            для первичного анализа. В дальнейшем здесь появится авторизация по
            ролям и подключение к API.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-stone-500">
          <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-800">
            Demo · без реальных координат
          </span>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
        <div className="space-y-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-stone-900">
              Карта заявок (макет)
            </h2>
            <button className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-700 hover:bg-stone-50">
              Инструменты отбора региона
            </button>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-stone-200 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-xs text-stone-100 shadow-sm md:min-h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(248,250,252,0.1),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(74,222,128,0.18),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between p-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                    Слой: гражданские находки
                  </p>
                  <p className="text-xs font-medium text-stone-50">
                    Базовый прототип карты эксперта
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  pending
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  promising
                </div>
              </div>
              <div className="relative mt-3 flex-1 rounded-lg border border-emerald-400/30 bg-black/40">
                <div className="absolute inset-4 rounded border border-emerald-100/15">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-10 top-8 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.95)]" />
                    <div className="absolute left-28 top-18 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(45,212,191,0.95)]" />
                    <div className="absolute left-36 top-14 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,1)]" />
                    <div className="absolute left-46 top-26 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(45,212,191,0.95)]" />
                  </div>
                  <div className="absolute inset-x-4 bottom-3 flex items-center justify-between text-[10px] text-emerald-50/90">
                    <span>выделение прямоугольником / полигоном</span>
                    <span className="rounded-full bg-black/40 px-2 py-1">
                      Σ заявок по региону
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-stone-900">
              Список заявок (демо)
            </h2>
            <select className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs text-stone-700 outline-none ring-emerald-500/40 focus:bg-white focus:ring-2">
              <option>На рассмотрении</option>
              <option>Перспективно</option>
              <option>Требуется выезд</option>
              <option>Отклонено</option>
            </select>
          </div>
          <div className="space-y-2 text-xs text-stone-700">
            {mockExpertItems.map((item) => (
              <article
                key={item.id}
                className="space-y-1 rounded-xl border border-stone-100 bg-stone-50 p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-stone-600">
                    {item.region}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500">
                  Тип: {item.type} · Статус: {item.status}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <button className="rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-stone-700 hover:bg-stone-100">
                    Открыть карточку
                  </button>
                  <button className="rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-medium text-emerald-50 hover:bg-emerald-700">
                    Пометить «перспективно»
                  </button>
                  <button className="rounded-full bg-sky-600 px-2.5 py-1 text-[10px] font-medium text-sky-50 hover:bg-sky-700">
                    Требуется выезд
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-1 text-[11px] text-stone-500">
            В полноценной реализации список будет синхронизирован с картой, со
            сменой статусов, логированием решений и комментариями экспертов.
          </p>
        </aside>
      </section>
    </div>
  );
}

