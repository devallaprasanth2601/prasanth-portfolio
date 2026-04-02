import { profile } from "../data/resume"

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-200/90 bg-gradient-to-br from-brand/10 via-zinc-50 to-zinc-50 p-8 dark:border-zinc-800 dark:from-brand/15 dark:via-zinc-950 dark:to-zinc-950 sm:p-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand dark:text-brand-muted">
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-lg text-zinc-700 dark:text-zinc-300">
          Interested in backend, platform, or authentication engineering? Reach out with a short note and role context.
        </p>
        <div className="mt-8 flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-zinc-900 underline decoration-brand/40 underline-offset-4 transition hover:decoration-brand dark:text-zinc-100"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="font-mono text-zinc-600 dark:text-zinc-400"
          >
            {profile.phone}
          </a>
          <span className="text-zinc-600 dark:text-zinc-400">{profile.location}</span>
        </div>
      </div>
    </section>
  )
}
