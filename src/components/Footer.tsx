import { profile } from "../data/resume"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-200/80 px-4 py-8 dark:border-zinc-800/80 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          © {year} {profile.name}. Built with React, Vite, and Tailwind CSS.
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-brand dark:text-zinc-400 dark:hover:text-brand-muted"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-zinc-600 hover:text-brand dark:text-zinc-400 dark:hover:text-brand-muted"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
