const dotGrid =
  'bg-[radial-gradient(rgb(20_20_20/0.09)_1px,transparent_1px)] bg-[size:16px_16px] bg-[position:-8px_-8px]';


export default function Workbench() {
  return (
    <figure
      role="img"
      aria-label="Макет главного экрана с размерами в процессе проектирования и лог сборки проекта"
      className="relative sm:pb-20"
    >
      <div className="overflow-hidden rounded-[20px] border border-line bg-surface shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <div className="flex h-10 items-center justify-between border-b border-line px-4 font-mono text-[12px] text-ink-3">
          <span>Главная — макет</span>
          <span className="tabular-nums">1440 × 900</span>
        </div>

        <div className={`bg-raised p-5 sm:p-8 ${dotGrid}`}>
          <div className="rounded-xl border border-line bg-surface p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="size-4 rounded-[4px] bg-ink" />
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-8 rounded-full bg-ink/15" />
                <span className="h-1.5 w-8 rounded-full bg-ink/15" />
                <span className="hidden h-1.5 w-8 rounded-full bg-ink/15 xs:block" />
                <span className="h-5 w-12 rounded-[5px] bg-ink" />
              </div>
            </div>

            <div className="relative mt-10">
              <div className="space-y-2">
                <span className="block h-3.5 w-[86%] rounded-[3px] bg-ink" />
                <span className="block h-3.5 w-[58%] rounded-[3px] bg-ink" />
              </div>
              <span className="pointer-events-none absolute -inset-2 border border-redline">
                <span className="absolute -top-[3px] -left-[3px] size-[5px] border border-redline bg-surface" />
                <span className="absolute -top-[3px] -right-[3px] size-[5px] border border-redline bg-surface" />
                <span className="absolute -bottom-[3px] -left-[3px] size-[5px] border border-redline bg-surface" />
                <span className="absolute -right-[3px] -bottom-[3px] size-[5px] border border-redline bg-surface" />
              </span>
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-[3px] bg-redline px-1 font-mono text-[10px] leading-4 text-white tabular-nums">
                560 × 64
              </span>
            </div>

            <div className="relative mt-8">
              <span className="absolute -top-6 left-[38%] h-4 w-px bg-redline" />
              <span className="absolute -top-6 left-[calc(38%+6px)] font-mono text-[10px] leading-4 text-redline">
                24
              </span>
              <div className="space-y-2">
                <span className="block h-2 w-full rounded-[2px] bg-ink/12" />
                <span className="block h-2 w-[92%] rounded-[2px] bg-ink/12" />
                <span className="block h-2 w-[68%] rounded-[2px] bg-ink/12" />
              </div>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <span className="h-8 w-28 rounded-md bg-ink" />
              <span className="h-8 w-24 rounded-md border border-line-strong" />
            </div>
          </div>
        </div>
      </div>

      <div className="on-night relative mx-4 -mt-8 rounded-[14px] border border-line-night bg-night p-4 font-mono text-[12px] leading-5 text-snow-2 shadow-[0_12px_32px_rgba(0,0,0,0.18)] sm:absolute sm:bottom-0 sm:-left-6 sm:mx-0 sm:mt-0 sm:w-[340px]">
        <p>
          <span className="text-snow-3">$</span> <span className="text-snow">npm run build</span>
        </p>
        <p>
          <span className="text-snow">✓</span> tsc · 0 ошибок
        </p>
        <p className="tabular-nums">
          <span className="text-snow">✓</span> vite build · 0.35 s
        </p>
        <p className="mt-2 text-snow-3">
          agent › <span className="text-snow-2">адаптив: 375, 768, 1440</span>
        </p>
      </div>
    </figure>
  );
}
