import Image from "next/image"
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="relative h-7 w-7">
              <Image
                src="/ecash-app-site/app-logo.svg"
                alt="Ecash App logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl">Ecash App</span>
          </div>

          <Button
            asChild
            size="sm"
            aria-label="Open on GitHub"
          >
            <a
              href="https://github.com/fedimint/e-cash-app"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="Open on GitHub"
            >
              Open on GitHub <Github className="w-4 h-4" />
              
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
