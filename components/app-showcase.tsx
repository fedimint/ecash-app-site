import Image from "next/image"

import { Card } from "@/components/ui/card"

const appScreens = [
  {
    title: "QR Code Payments",
    description: "Scan and pay instantly with secure QR codes",
    image: "/assets/app-qr-receive.png",
  },
  {
    title: "Lightning Network",
    description: "Fast lightning network transactions",
    image: "/assets/app-lightning-request.png",
  },
  {
    title: "Transaction History",
    description: "Track all your payments and receipts",
    image: "/assets/app-transaction-history.png",
  },
  {
    title: "Wallet Balance",
    description: "Monitor your ecash balance in real-time",
    image: "/assets/app-wallet-balance.png",
  },
  {
    title: "Discover Federations",
    description: "Find and join new federations right from the app",
    image: "/assets/app-discover-federations.png",
  },
  {
    title: "Automated Backup & Recovery",
    description: "Restore your wallet with familiar seed phrases",
    image: "/assets/app-backup-create.png",
  },
  {
    title: "Lightning Address",
    description: "Claim and receive with your own Lightning Address",
    image: "/assets/app-lightning-address.png",
  },
  {
    title: "Nostr Wallet Connect",
    description: "Connect to Nostr apps for seamless zaps",
    image: "/assets/app-nwc-connect.png",
  },
]

export function AppShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Choose your payment method</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Ecash App supports Lightning, On-chain and Ecash payments in a single unified wallet
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {appScreens.map((screen, index) => (
            <Card
              key={index}
              className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-b from-background/60 via-background/40 to-background/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/20 shadow-primary/10"
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />

              <div className="relative z-10 flex h-full flex-col items-center text-center">
                <div className="relative mx-auto aspect-[9/19] w-full max-w-[200px] flex-none rounded-[2.5rem] border border-white/10 bg-black/90 p-2.5 shadow-[0_25px_50px_-24px_rgba(0,0,0,0.75)] transition-transform duration-500 will-change-transform transform-gpu group-hover:scale-105">
                  <div className="absolute top-3 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/10" />
                  <div className="absolute top-6 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/5 blur-sm" />
                  <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] border border-white/5">
                    <Image
                      fill
                      sizes="(max-width: 640px) 70vw, 200px"
                      src={screen.image || "/placeholder.svg"}
                      alt={screen.title}
                      className="h-full w-full object-cover"
                      quality={100}
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-base font-semibold text-foreground">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{screen.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
