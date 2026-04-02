import { profile } from "../data/resume"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-zinc-50 to-white px-4 py-20 sm:px-6 sm:py-28 dark:border-zinc-800/80 dark:from-zinc-950 dark:to-zinc-950"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(100,116,139,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.08) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-brand dark:text-brand-muted">
          Open to senior backend engineer roles
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
          {profile.title} · {profile.location}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
