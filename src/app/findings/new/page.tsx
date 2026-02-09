/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useMemo } from "react";

type FindingType = "ceramics" | "metal" | "stone" | "bone" | "unknown";

type Step = 1 | 2 | 3 | 4;

interface FindingFormState {
  locationDescription: string;
  latitude: string;
  longitude: string;
  objectType: FindingType;
  description: string;
  depth: string;
  conditions: string;
  discoveredAt: string;
  photos: File[];
  confirmHonesty: boolean;
}

const initialFormState: FindingFormState = {
  locationDescription: "",
  latitude: "",
  longitude: "",
  objectType: "unknown",
  description: "",
  depth: "",
  conditions: "",
  discoveredAt: "",
  photos: [],
  confirmHonesty: false,
};

export default function NewFindingPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FindingFormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const hasLocationFilled = useMemo(
    () =>
      Boolean(
        form.locationDescription.trim() ||
          (form.latitude.trim() && form.longitude.trim()),
      ),
    [form.locationDescription, form.latitude, form.longitude],
  );

  const hasDescriptionFilled = useMemo(
    () =>
      Boolean(
        form.description.trim() &&
          form.depth.trim() &&
          form.discoveredAt.trim(),
      ),
    [form.description, form.depth, form.discoveredAt],
  );

  function handleNext() {
    const newErrors: string[] = [];

    if (step === 1 && !hasLocationFilled) {
      newErrors.push(
        "Укажите хотя бы примерное местоположение или координаты находки.",
      );
    }

    if (step === 2 && !hasDescriptionFilled) {
      newErrors.push(
        "Опишите находку, выберите глубину и дату обнаружения, чтобы продолжить.",
      );
    }

    if (step === 3 && !form.confirmHonesty) {
      newErrors.push(
        "Для отправки заявки необходимо подтвердить честность и корректность данных.",
      );
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setStep((prev) => (prev < 3 ? ((prev + 1) as Step) : prev));
  }

  function handlePrev() {
    setErrors([]);
    setStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev));
  }

  function handleChange<K extends keyof FindingFormState>(
    field: K,
    value: FindingFormState[K],
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handlePhotosChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const filesArray = Array.from(e.target.files).slice(0, 5);
    handleChange("photos", filesArray);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: string[] = [];
    if (!hasLocationFilled) {
      newErrors.push(
        "Заполните информацию о местоположении (шаг 1), прежде чем отправлять заявку.",
      );
    }
    if (!hasDescriptionFilled) {
      newErrors.push(
        "Заполните описание находки (шаг 2), прежде чем отправлять заявку.",
      );
    }
    if (!form.confirmHonesty) {
      newErrors.push(
        "Подтвердите честность и корректность данных перед отправкой.",
      );
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Здесь в будущем будет запрос к API.
    // Сейчас просто помечаем как успешно отправленную демо-заявку.
    // eslint-disable-next-line no-console
    console.log("Demo finding submission:", form);

    setErrors([]);
    setIsSubmitted(true);
    setStep(4);
  }

  const stepLabel = (() => {
    if (step === 1) return "Место";
    if (step === 2) return "Описание";
    if (step === 3) return "Фото и отправка";
    return "Заявка отправлена";
  })();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight text-stone-100 md:text-2xl">
          Сообщить о находке
        </h1>
        <p className="text-sm text-stone-300">
          Заполните форму в несколько шагов. В этой версии данные остаются
          только в браузере — это демонстрационный прототип пользовательского
          интерфейса.
        </p>
      </header>

      <form
        className="space-y-5 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                step === 1 || step > 1
                  ? "bg-emerald-600 text-emerald-50"
                  : "bg-stone-100 text-stone-500"
              }`}
            >
              1
            </span>
            <span
              className={`font-medium ${
                step === 1 || step > 1
                  ? "text-stone-900"
                  : "text-stone-400"
              }`}
            >
              Место
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                step === 2 || step > 2
                  ? "bg-emerald-600 text-emerald-50"
                  : "bg-stone-100 text-stone-500"
              }`}
            >
              2
            </span>
            <span
              className={`${
                step === 2 || step > 2
                  ? "font-medium text-stone-900"
                  : "text-stone-400"
              }`}
            >
              Описание
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                step === 3 || step > 3
                  ? "bg-emerald-600 text-emerald-50"
                  : "bg-stone-100 text-stone-500"
              }`}
            >
              3
            </span>
            <span
              className={`${
                step === 3 || step > 3
                  ? "font-medium text-stone-900"
                  : "text-stone-400"
              }`}
            >
              Фото и отправка
            </span>
          </div>
        </div>

        {errors.length > 0 && (
          <div className="space-y-1 rounded-2xl border border-red-100 bg-red-50 px-3 py-2 text-xs text-red-800">
            <p className="font-medium">Проверьте заполнение формы</p>
            <ul className="list-disc space-y-0.5 pl-4">
              {errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {step === 1 && (
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-stone-900">
              Шаг 1. Укажите примерное место находки (макет карты)
            </h2>
            <div className="grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]">
              <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-stone-200 bg-gradient-to-br from-stone-200 via-stone-100 to-emerald-100 shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(15,23,42,0.08),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(22,163,74,0.12),transparent_55%)]" />
                <div className="relative flex h-full flex-col justify-between p-3">
                  <div className="flex items-center justify-between text-[11px] text-stone-700">
                    <span className="rounded-full bg-white/80 px-2 py-1 shadow-sm">
                      Определение координат (прототип)
                    </span>
                    <button
                      type="button"
                      className="rounded-full bg-white/80 px-2 py-1 text-[11px] shadow-sm hover:bg-white"
                      onClick={() => {
                        // В дальнейшем здесь будет использование Geolocation API.
                      }}
                    >
                      Использовать моё местоположение
                    </button>
                  </div>
                  <div className="relative mt-2 flex-1 rounded-lg border border-stone-300/80 bg-white/80">
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute inset-y-6 left-1/2 w-px bg-stone-200" />
                      <div className="absolute inset-x-6 top-1/2 h-px bg-stone-200" />
                      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.9)]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700">
                    Ближайший населённый пункт
                  </label>
                  <input
                    type="text"
                    placeholder="Например, 3 км к северу от села Каменное"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-stone-400 focus:bg-white focus:ring-2"
                    value={form.locationDescription}
                    onChange={(e) =>
                      handleChange("locationDescription", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700">
                    Координаты (будут определяться автоматически)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Широта"
                      className="w-1/2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-stone-400 focus:bg-white focus:ring-2"
                      value={form.latitude}
                      onChange={(e) =>
                        handleChange("latitude", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Долгота"
                      className="w-1/2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-stone-400 focus:bg-white focus:ring-2"
                      value={form.longitude}
                      onChange={(e) =>
                        handleChange("longitude", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1.5 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900">
                  <p className="font-medium">Важно для сохранности наследия</p>
                  <p>
                    Если вы предполагаете, что объект может быть особо уязвимым
                    (могильник, культовое место и т.п.), разрешается немного
                    сместить точку от реального места и подробно описать
                    ситуацию в комментариях.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-stone-900">
              Шаг 2. Расскажите о находке
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700">
                  Предполагаемый тип объекта
                </label>
                <select
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:bg-white focus:ring-2"
                  value={form.objectType}
                  onChange={(e) =>
                    handleChange(
                      "objectType",
                      e.target.value as FindingType,
                    )
                  }
                >
                  <option value="unknown">Не знаю / затрудняюсь</option>
                  <option value="ceramics">Керамика</option>
                  <option value="metal">Металл</option>
                  <option value="stone">Камень</option>
                  <option value="bone">Кость</option>
                </select>
                <p className="text-[11px] text-stone-500">
                  Не обязательно угадывать точно — эксперты скорректируют
                  классификацию.
                </p>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700">
                  Примерная глубина / условия обнаружения
                </label>
                <select
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:bg-white focus:ring-2"
                  value={form.depth}
                  onChange={(e) => handleChange("depth", e.target.value)}
                >
                  <option value="">Выберите вариант</option>
                  <option value="surface">На поверхности</option>
                  <option value="to30">До 30 см</option>
                  <option value="deeper30">Глубже 30 см</option>
                  <option value="unknown">Не знаю</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-700">
                Опишите, что вы нашли
              </label>
              <textarea
                rows={4}
                placeholder="Форма, размер, цвет, наличие орнамента, состояние, контекст (поле, берег реки, сад, стройка и т.п.)"
                className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-stone-400 focus:bg-white focus:ring-2"
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700">
                  Дата обнаружения
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:bg-white focus:ring-2"
                  value={form.discoveredAt}
                  onChange={(e) =>
                    handleChange("discoveredAt", e.target.value)
                  }
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700">
                  Дополнительные условия (по желанию)
                </label>
                <input
                  type="text"
                  placeholder="Например, после сильного дождя, раскоп траншеи, распашка поля…"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none ring-emerald-500/40 placeholder:text-stone-400 focus:bg-white focus:ring-2"
                  value={form.conditions}
                  onChange={(e) => handleChange("conditions", e.target.value)}
                />
              </div>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-stone-900">
              Шаг 3. Загрузите фото и отправьте заявку
            </h2>
            <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)]">
              <div className="space-y-3 text-sm">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700">
                    Фотографии (по возможности)
                  </label>
                  <label className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-4 py-6 text-center text-xs text-stone-500 hover:border-stone-400 hover:bg-stone-100">
                    <span>
                      Перетащите файлы сюда или нажмите для выбора (до 5 фото)
                    </span>
                    <span className="text-[11px] text-stone-400">
                      Форматы: JPG, PNG. Желательно общий план и крупный план.
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handlePhotosChange}
                    />
                  </label>
                </div>
                {form.photos.length > 0 && (
                  <div className="space-y-1.5">
                    <p className="text-xs font-medium text-stone-700">
                      Предпросмотр выбранных фото
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {form.photos.map((file) => (
                        <div
                          key={file.name}
                          className="overflow-hidden rounded-xl border border-stone-200 bg-stone-100"
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="h-24 w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-3 text-xs text-stone-700">
                <div className="space-y-1.5 rounded-2xl bg-emerald-50 p-3 text-emerald-900">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em]">
                    Перед отправкой
                  </p>
                  <p>
                    Личные данные и точные координаты будут видны только
                    авторизованным специалистам. Публичные карты используют
                    обезличенные агрегированные данные.
                  </p>
                </div>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                    checked={form.confirmHonesty}
                    onChange={(e) =>
                      handleChange("confirmHonesty", e.target.checked)
                    }
                  />
                  <span>
                    Я подтверждаю, что указал(а) данные честно и понимаю, что
                    платформа не поощряет незаконные раскопки или вывоз
                    предметов. При необходимости я готов(а) уточнить детали
                    находки для специалистов.
                  </span>
                </label>
              </div>
            </div>
          </section>
        )}

        {step === 4 && isSubmitted && (
          <section className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-3 py-3 text-sm text-emerald-900 md:px-4 md:py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Заявка отправлена (демо)
            </p>
            <p>
              Спасибо! В реальной версии платформы на ваш адрес электронной
              почты придёт подтверждение, а статус заявки можно будет отслеживать
              в разделе «Мои находки».
            </p>
            <p className="text-xs text-emerald-900/80">
              Сейчас данные не сохраняются на сервере и служат только для
              демонстрации интерфейса. Вы можете вернуться на главный экран или
              создать ещё одну демо-заявку.
            </p>
          </section>
        )}

        <div className="flex flex-col gap-3 border-t border-stone-100 pt-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-stone-500">
            Текущий шаг: {stepLabel}
          </p>
          <div className="flex flex-wrap items-center justify-end gap-2">
            {step > 1 && step < 4 && (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-50"
                onClick={handlePrev}
              >
                Назад
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 hover:bg-stone-950"
                onClick={handleNext}
              >
                Далее
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-xs font-medium text-emerald-50 shadow-sm shadow-emerald-300/50 hover:bg-emerald-800"
              >
                Отправить заявку (демо)
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

