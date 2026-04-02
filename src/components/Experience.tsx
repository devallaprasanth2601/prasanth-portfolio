import { experience } from "../data/resume"

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-zinc-200/80 bg-white px-4 py-16 dark:border-zinc-800/80 dark:bg-zinc-950 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand dark:text-brand-muted">
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Impact-focused roles across fintech authentication, telecom platforms, e-commerce, and enterprise integration.
        </p>
        <ol className="mt-12 space-y-12">
          {experience.map((job, i) => (
            <li key={job.company} className="relative flex gap-6 sm:gap-10">
              <div className="hidden w-28 shrink-0 sm:block">
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{job.period}</span>
              </div>
              <div className="relative flex-1 pb-2">
                {i !== experience.length - 1 ? (
                  <span
                    className="absolute left-[7px] top-2 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 sm:left-[-24px]"
                    aria-hidden
                  />
                ) : null}
                <div className="relative flex items-start gap-3">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand ring-4 ring-brand/20 dark:bg-brand-muted dark:ring-brand-muted/25"
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{job.role}</h3>
                    <p className="text-brand dark:text-brand-muted">{job.company}</p>
                    <p className="mt-1 font-mono text-xs text-zinc-500 sm:hidden dark:text-zinc-500">
                      {job.period}
                    </p>
                    <p className="mt-4 border-l-2 border-brand/50 pl-4 text-sm leading-relaxed text-zinc-700 dark:border-brand-muted/50 dark:text-zinc-300">
                      {job.summary}
                    </p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                      Highlights
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-400 dark:text-zinc-400 dark:marker:text-zinc-600">
                      {job.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
