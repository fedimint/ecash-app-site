import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          &copy; {year} Frost Forge. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a
            href="mailto:frostforgetech@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            frostforgetech@gmail.com
          </a>
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
