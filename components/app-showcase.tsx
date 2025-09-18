import { Card } from "@/components/ui/card"

const appScreens = [
  {
    title: "QR Code Payments",
    description: "Scan and pay instantly with secure QR codes",
    image: "/mobile-app-qr-code-payment-screen-dark-theme.jpg",
  },
  {
    title: "Lightning Network",
    description: "Fast lightning network transactions",
    image: "/mobile-app-lightning-network-payment-screen-dark-t.jpg",
  },
  {
    title: "Transaction History",
    description: "Track all your payments and receipts",
    image: "/mobile-app-transaction-history-screen-dark-theme.jpg",
  },
  {
    title: "Wallet Balance",
    description: "Monitor your e-cash balance in real-time",
    image: "/mobile-app-wallet-balance-screen-dark-theme.jpg",
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
            The E-Cash App supports Lightning, On-chain and E-Cash payments in a single unified wallet
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {appScreens.map((screen, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-[9/16] relative overflow-hidden">
                <img
                  src={screen.image || "/placeholder.svg"}
                  alt={screen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="font-semibold text-sm text-foreground">{screen.title}</h3>
                  <p className="text-xs text-muted-foreground">{screen.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
