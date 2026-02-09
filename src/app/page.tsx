export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-800">
            Гражданская археология · сохранение памяти
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">
            Отметьте найденный фрагмент истории&nbsp;—{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
              эксперты проверят и сохранят данные
            </span>
            .
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
            Платформа, где жители могут сообщать о возможных археологических находках,
            а профессиональные археологи — анализировать, проверять и систематизировать
            эти сообщения, не раскрывая чувствительных данных о локациях.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/findings/new"
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-5 py-2.5 text-sm font-medium text-amber-50 shadow-sm shadow-amber-300/50 transition hover:bg-amber-800"
            >
              Сообщить о находке
            </a>
            <a
              href="/expert"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 shadow-sm hover:border-stone-400 hover:bg-stone-50"
            >
              Присоединиться как эксперт
            </a>
          </div>
          <dl className="mt-4 grid gap-4 text-xs text-stone-400 sm:grid-cols-3 sm:text-sm">
            <div>
              <dt className="font-medium text-stone-100">Ответственный вклад</dt>
              <dd>Простая форма, подсказки по корректному описанию находки.</dd>
            </div>
            <div>
              <dt className="font-medium text-stone-100">Научная экспертиза</dt>
              <dd>Панель археолога с картой, статусами и комментариями.</dd>
            </div>
            <div>
              <dt className="font-medium text-stone-100">Безопасность данных</dt>
              <dd>Обезличенные публичные карты и система модерации.</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-64 overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900 p-4 shadow-xl md:h-80">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(250,250,249,0.08),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(251,191,36,0.14),transparent_55%)]" />
          <div className="relative flex h-full flex-col justify-between rounded-2xl bg-black/40 p-4 text-xs text-stone-100 backdrop-blur">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                  Карта находок
                </p>
                <p className="text-sm font-medium text-stone-50">
                  Юг центрального региона
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px]">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                На рассмотрении
              </div>
            </div>
            <div className="relative mt-2 flex-1 rounded-xl border border-emerald-500/30 bg-gradient-to-tr from-emerald-900/60 via-stone-950 to-black shadow-inner">
              <div className="absolute inset-4 rounded-lg border border-emerald-200/20">
                <div className="absolute inset-x-6 top-5 flex items-center justify-between text-[10px] text-emerald-100/80">
                  <span>Типы находок</span>
                  <span>керамика · металл · кость</span>
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 text-[10px] text-stone-200/90">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    новые заявки
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    перспективно
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.9)]" />
                <div className="absolute left-24 top-20 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <div className="absolute left-32 top-12 h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,1)]" />
                <div className="absolute left-40 top-28 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <div className="absolute left-20 top-32 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.85)]" />
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] text-stone-200/90">
              <div className="flex flex-col gap-0.5">
                <span>Среднее время первичной проверки: 3–5 дней</span>
                <span className="text-[9px] text-stone-400">
                  точные координаты видны только авторизованным экспертам
                </span>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                подключены полигональные границы регионов
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-6 rounded-3xl border border-stone-200 bg-white px-4 py-5 text-sm text-stone-700 shadow-sm sm:grid-cols-3 sm:px-6 sm:py-6">
        <div>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Как это работает
          </h2>
          <p className="text-sm text-stone-600">
            Три простых шага от находки до научных данных, с учётом требований
            по сохранности памятников и конфиденциальности.
          </p>
        </div>
        <ol className="space-y-3 text-sm sm:col-span-2">
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-900">
              1
            </span>
            <div>
              <p className="font-medium text-stone-900">Вы отмечаете место и описываете находку</p>
              <p className="text-stone-600">
                Заполните простую форму, загрузите фото и при необходимости немного
                сместите точку от реального места для защиты памятника.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-900">
              2
            </span>
            <div>
              <p className="font-medium text-stone-900">Эксперты анализируют и присваивают статус</p>
              <p className="text-stone-600">
                Археологи просматривают заявку на специализированной карте, оставляют
                комментарии и помечают: «перспективно», «требуется выезд» или «отклонено».
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-900">
              3
            </span>
            <div>
              <p className="font-medium text-stone-900">Данные попадают в научный контекст</p>
              <p className="text-stone-600">
                Подтверждённые находки аккумулируются в базе с привязкой к регионам
                и периодам и могут использоваться в исследованиях и охране наследия.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}
