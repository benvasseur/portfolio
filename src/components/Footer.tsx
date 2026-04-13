export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Benjamin Vasseur
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:benvasseur59@gmail.com"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/vasseurbenjamin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
