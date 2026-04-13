import { ArrowRight, Smartphone, Monitor } from "lucide-react"
import Image from "next/image"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AppShowcase } from "@/components/app-showcase"
import { Button } from "@/components/ui/button"
import { getLatestApkDownloadUrl, getLatestAppImageDownloadUrl } from "@/lib/github"

export default async function Home() {
  const [apkDownloadUrl, appImageDownloadUrl] = await Promise.all([
    getLatestApkDownloadUrl(),
    getLatestAppImageDownloadUrl(),
  ])

  return (
    <main className="min-h-screen pb-12">
      <Header />
      <HeroSection apkDownloadUrl={apkDownloadUrl} appImageDownloadUrl={appImageDownloadUrl} />
      <AppShowcase />
      <section className="container flex flex-col gap-12 mx-auto">
        <div className="mx-auto px-4 flex justify-center flex-col sm:flex-row gap-4">
          <Button asChild aria-label="Download Latest APK" size="lg" className="group">
            <a href={apkDownloadUrl} target="_blank" rel="noopener noreferrer">
              <Smartphone className="w-4 h-4" />
              Download Latest APK
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild aria-label="Download Linux AppImage" size="lg" className="group">
            <a href={appImageDownloadUrl} target="_blank" rel="noopener noreferrer">
              <Monitor className="w-4 h-4" />
              Download Linux AppImage
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm text-muted-foreground">Also available on</span>
          <a href="https://play.google.com/store/apps/details?id=org.fedimint.app&hl=en_US" target="_blank" rel="noopener noreferrer">
            <Image src="/google-play-badge.png" alt="Get it on Google Play" width={140} height={42} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mx-auto"> 
          Powered by <a href="https://fedimint.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 justify-center">
            <Image src="/fedimint-icon.png" alt="Fedimint logo" width={16} height={16} />
            <span className="font-medium text-foreground">Fedimint</span></a>
        </p>
      </section>
    </main>
  )
}
