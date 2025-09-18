import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">

              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Digital payments
                <span className="text-primary block">without limits</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                Experience lightning-fast transactions with our next-generation ecash platform. Secure, private, and
                built for the future of digital payments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Download Latest APK
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />

              {/* Phone frame */}
              <div className="relative bg-card border border-border rounded-3xl p-2 shadow-2xl w-[240px] sm:w-[280px] md:w-[320px]">
                <div className="bg-background rounded-2xl overflow-hidden">
                  <img src="/assets/hero-lightning-receive.png" alt="Ecash app lightning receive screen" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
