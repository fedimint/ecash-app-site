import { Card, CardContent } from "@/components/ui/card"
import { Zap, Link, Search, Shield, ArrowUpDown } from "lucide-react"

const features = [
  {
    icon: ArrowUpDown,
    title: "Choose your payment method",
    description: "Lightning, On-chain and E-Cash payments in a single unified wallet",
  },
  {
    icon: Zap,
    title: "Lightning Address",
    description: "Own your personalized Lightning Address and receive payments instantly",
  },
  {
    icon: Link,
    title: "Mint Wallet Connect",
    description: "Connect Fedi E-Cash to Mint wallets and manage your digital assets seamlessly",
  },
  {
    icon: Search,
    title: "Discover Federations",
    description: "Find and explore various Mint federations to expand your payment options",
  },
  {
    icon: Shield,
    title: "Backup & Recovery",
    description: "Keep your e-cash safe using a secure backup and recovery system",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need for seamless digital payments in one comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 border-border/50 border-primary/20 hover:border-primary/30"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
