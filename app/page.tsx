import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AppShowcase } from "@/components/app-showcase"
import { Button } from "@/components/ui/button"
import { getLatestApkDownloadUrl } from "@/lib/github"

export default async function Home() {
  const apkDownloadUrl = await getLatestApkDownloadUrl()

  return (
    <main className="min-h-screen pb-12">
      <Header />
      <HeroSection apkDownloadUrl={apkDownloadUrl} />
      <AppShowcase />
      <section>
        <div className="container mx-auto px-4 flex justify-center flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="group">
            <a href={apkDownloadUrl} target="_blank" rel="noopener noreferrer">
              Download Latest APK
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a href={"https://fedimint.org"} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mx-auto"> 
              Powered by <a href="https://fedimint.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 justify-center">
                <Image src="/ecash-app-site/fedimint-icon.png" alt="Fedimint logo" width={16} height={16} />
                <span className="font-medium text-foreground">Fedimint</span></a>
            </p>
        </div>
      </section>
    </main>
  )
}
