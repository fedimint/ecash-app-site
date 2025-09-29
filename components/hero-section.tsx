import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  apkDownloadUrl: string
}

export function HeroSection({ apkDownloadUrl }: HeroSectionProps) {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">

              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Control your
                <span className="text-primary block text-8xl">Ecash</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                Experience lightning-fast payments with our next generation Bitcoin wallet. 
                Secure, private, and feature rich.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1"> 
                Powered by <a href="https://fedimint.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 justify-center">
                  <Image src="/fedimint-icon.png" alt="Fedimint logo" width={16} height={16} />
                  <span className="font-medium text-foreground">Fedimint</span></a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild aria-label="Download Latest APK" size="lg" className="group">
                <a href={apkDownloadUrl} target="_blank" rel="noopener noreferrer">
                  Download Latest APK
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild aria-label="Learn More" variant="outline" size="lg">
                <a href="https://fedimint.org" tabIndex={0} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">

              {/* Phone frame */}
              <div className="peer relative bg-card border border-border rounded-3xl p-2 shadow-2xl w-[280px] sm:w-[280px] md:w-[360px] transition-transform duration-500 will-change-transform transform-gpu hover:scale-105">
                <div className="bg-background rounded-2xl overflow-hidden">
                  <Image
                    src="/app-hero.png"
                    alt="Ecash app lightning receive screen"
                    width={1080}
                    height={2400}
                    quality={100}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="peer absolute z-[-1] inset-0 bg-primary/20 blur-3xl rounded-full scale-150 transition-all duration-500 peer-hover:scale-140" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
