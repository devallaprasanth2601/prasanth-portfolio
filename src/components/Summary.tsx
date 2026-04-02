import { summary } from "../data/resume"

export function Summary() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand dark:text-brand-muted">
          About
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          {summary}
        </p>
      </div>
    </section>
  )
}
