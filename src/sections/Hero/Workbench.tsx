export default function Workbench() {
  return (
    <figure
      role="img"
      aria-label="Плоская иллюстрация: макет главного экрана с размерами и лог сборки проекта"
      className="relative pb-16 sm:pb-20"
    >
      <span aria-hidden className="absolute -top-6 -right-2 size-24 rounded-full bg-sky sm:-right-6 sm:size-32" />
      <span aria-hidden className="absolute bottom-6 -left-3 size-16 rounded-tr-[64px] bg-cobalt-soft sm:-left-8 sm:size-24 sm:rounded-tr-[96px]" />

      <div className="relative overflow-hidden rounded-2xl bg-cobalt p-4 sm:p-6">
        <div className="flex items-center justify-between pb-4 font-mono text-[12px] text-sky-soft">
          <span>Главная — макет</span>
          <span className="tabular-nums">1440 × 900</span>
        </div>

        <div className="rounded-xl bg-surface p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="size-4 rounded-[4px] bg-cobalt" />
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-8 rounded-full bg-raised" />
              <span className="h-1.5 w-8 rounded-full bg-raised" />
              <span className="hidden h-1.5 w-8 rounded-full bg-raised xs:block" />
              <span className="h-5 w-12 rounded-[5px] bg-ink" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-[1fr_auto] items-start gap-5">
            <div className="relative">
              <div className="space-y-2">
                <span className="block h-3.5 w-[92%] rounded-[3px] bg-ink" />
                <span className="block h-3.5 w-[64%] rounded-[3px] bg-ink" />
              </div>
              <span className="pointer-events-none absolute -inset-2 border border-dashed border-cobalt" />
              <span className="absolute -top-7 left-0 rounded-[3px] bg-cobalt px-1.5 font-mono text-[10px] leading-4 text-surface tabular-nums">
                560 × 64
              </span>
            </div>
            <span className="grid size-14 place-items-center rounded-lg bg-cobalt-soft sm:size-16">
              <span className="size-6 rounded-full bg-cobalt sm:size-7" />
            </span>
          </div>

          <div className="relative mt-8">
            <span className="absolute -top-6 left-[38%] h-4 w-px bg-cobalt" />
            <span className="absolute -top-6 left-[calc(38%+6px)] font-mono text-[10px] leading-4 text-cobalt">24</span>
            <div className="space-y-2">
              <span className="block h-2 w-full rounded-[2px] bg-raised" />
              <span className="block h-2 w-[92%] rounded-[2px] bg-raised" />
              <span className="block h-2 w-[68%] rounded-[2px] bg-raised" />
            </div>
          </div>

          <div className="mt-7 flex items-center gap-2">
            <span className="h-8 w-28 rounded-md bg-cobalt" />
            <span className="h-8 w-24 rounded-md bg-cobalt-soft" />
          </div>
        </div>
      </div>

      <div className="on-night absolute right-4 bottom-0 left-4 rounded-xl bg-night p-4 font-mono text-[12px] leading-5 text-snow-2 sm:right-auto sm:-left-6 sm:w-[340px]">
        <p>
          <span className="text-sky">$</span> <span className="text-snow">npm run build</span>
        </p>
        <p>
          <span className="text-sky">✓</span> tsc · 0 ошибок
        </p>
        <p className="tabular-nums">
          <span className="text-sky">✓</span> vite build · 0.35 s
        </p>
        <p className="mt-2 text-snow-3">
          agent › <span className="text-snow-2">адаптив: 375, 768, 1440</span>
        </p>
      </div>
    </figure>
  );
}
