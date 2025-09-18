import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AppShowcase } from "@/components/app-showcase"
import { getLatestApkDownloadUrl } from "@/lib/github"

export default async function Home() {
  const apkDownloadUrl = await getLatestApkDownloadUrl()

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection apkDownloadUrl={apkDownloadUrl} />
      <FeaturesSection />
      <AppShowcase />
    </main>
  )
}
