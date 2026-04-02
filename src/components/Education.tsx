import { education } from "../data/resume"

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-zinc-200/80 bg-white px-4 py-16 dark:border-zinc-800/80 dark:bg-zinc-950 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand dark:text-brand-muted">
          Education
        </h2>
        <ul className="mt-8 space-y-6">
          {education.map((edu) => (
            <li
              key={edu.school}
              className="flex flex-col gap-1 rounded-2xl border border-zinc-200/90 bg-zinc-50/80 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">{edu.school}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.degree}</p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">{edu.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
