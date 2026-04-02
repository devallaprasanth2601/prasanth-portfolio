import { highlights } from "../data/resume"

export function Highlights() {
  return (
    <section className="border-b border-zinc-200/80 bg-white px-4 py-12 dark:border-zinc-800/80 dark:bg-zinc-950 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand dark:text-brand-muted">
          Current role spotlight
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          What I&apos;m building at Mastercard
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Themes from my authentication platform work: standards-based passkeys, issuer services, Kafka and Redis, and
          shipping safely with security and platform partners.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{h.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
