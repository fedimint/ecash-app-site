import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ecash App by Frost Forge LLC.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pb-12">
      <Header />
      <div className="container mx-auto px-4 pt-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: September 9, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Frost Forge LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
              develops Ecash App, an open-source, Bitcoin wallet
              built on Fedimint. We are committed to protecting your privacy.
              This policy explains what data the app handles, how it is stored,
              and what information is transmitted to external services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data We Do Not Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ecash App has no analytics pipeline and no user accounts. The app
              does not collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
              <li>No analytics or telemetry</li>
              <li>No crash reporting</li>
              <li>No advertising or tracking SDKs</li>
              <li>No device identifiers or fingerprinting</li>
              <li>No email addresses, phone numbers, or real names</li>
              <li>No user accounts or passwords</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Two things do leave your device, and both are described in full
              below: a Lightning Address is claimed on your behalf when you join
              a federation, and your location is sent to BTC Map if you open the
              nearby merchants map. Everything else stays local to your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Stored on Your Device
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All wallet data is stored locally on your device in a database.
              This includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
              <li>
                Your seed phrase (BIP39 mnemonic) and derived cryptographic keys
              </li>
              <li>Federation configurations and ecash notes</li>
              <li>Transaction history and payment states</li>
              <li>
                User preferences (display currency, denomination format, PIN
                hash)
              </li>
              <li>
                Contact information synced from Nostr (if you enable contact
                sync)
              </li>
              <li>Lightning Address credentials</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              This data stays on your device except where an action requires
              network communication, as described below. Uninstalling the app
              removes all local data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Network Communications
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To function as a Bitcoin wallet, the app communicates with
              external services. All connections use encrypted protocols
              (HTTPS, WSS, and QUIC).
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Fedimint Federation Servers
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When you join a federation, the app communicates with that
              federation&apos;s servers to process transactions, check balances,
              and perform wallet operations. Federation operators can see
              transaction metadata but communications are encrypted.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Nostr Relays</h3>
            <p className="text-muted-foreground leading-relaxed">
              The app connects to Nostr relays for federation discovery, wallet
              backup, contact sync, and Nostr Wallet Connect (NWC). Backup data
              is encrypted before being sent to relays. Relay operators may see
              your IP address and public key metadata. You can configure which
              relays the app uses.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Bitcoin Network Data
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The app queries mempool.space for Bitcoin price data and on-chain
              transaction information. These are standard API requests that do
              not include any personal information, though the service provider
              may log your IP address per their own privacy policy.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Lightning Address Services
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When you join a federation, the app automatically claims a
              Lightning Address for you so that you can receive Lightning
              payments. You are not asked to confirm this at the time. The
              address and a recipient public key derived from your wallet are
              stored by the Lightning Address service (by default ecash.love,
              which we operate) for as long as the address remains registered.
              That stored record is what allows someone paying you to resolve
              your address to your wallet.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              You can change or release your Lightning Address in the app
              settings. Releasing it removes the registration from the service.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Nearby Merchants Map
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If you open the nearby merchants map, the app asks for location
              permission and sends your coordinates to BTC Map (api.btcmap.org)
              to search for businesses near you. Map imagery is loaded from
              OpenFreeMap (tiles.openfreemap.org), which receives your IP
              address and the area of the map you are viewing. Your location is
              used only for that search. We do not store it, and it is not
              linked to your wallet or your Lightning Address. No other part of
              the app uses location, and if you never open this screen, no
              location data is sent anywhere.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Federation and Gateway Information
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The app queries observer.fedimint.org to discover public
              federations, and amboss.space for public information about
              Lightning gateway nodes. Federations running on the Mutinynet test
              network link to mutinynet.com as a block explorer. These carry no
              personal information, though each provider may log your IP address
              per its own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The app interacts with the following third-party services during
              normal operation:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
              <li>
                <strong>Fedimint federation servers</strong> &mdash; operated by
                the community or organization that created the federation you
                join
              </li>
              <li>
                <strong>Nostr relays</strong> &mdash; decentralized message
                relays; you control which relays are used
              </li>
              <li>
                <strong>mempool.space</strong> &mdash; Bitcoin network data and
                price information
              </li>
              <li>
                <strong>ecash.love</strong> &mdash; Lightning Address
                registration, claimed automatically when you join a federation
                and releasable in settings
              </li>
              <li>
                <strong>api.btcmap.org</strong> &mdash; receives your
                coordinates when you open the nearby merchants map
              </li>
              <li>
                <strong>tiles.openfreemap.org</strong> &mdash; map imagery,
                derived from OpenStreetMap data
              </li>
              <li>
                <strong>observer.fedimint.org</strong> &mdash; discovery of
                public federations
              </li>
              <li>
                <strong>amboss.space</strong> &mdash; public information about
                Lightning gateway nodes
              </li>
              <li>
                <strong>mutinynet.com</strong> &mdash; block explorer for the
                Mutinynet test network
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Each of these services has its own privacy practices. We encourage
              you to review their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Permissions</h2>
            <p className="text-muted-foreground leading-relaxed">
              The app requests the following permissions:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
              <li>
                <strong>Camera</strong> &mdash; for scanning QR codes to send
                payments or join federations
              </li>
              <li>
                <strong>Internet</strong> &mdash; required for wallet
                operations, federation communication, and price data
              </li>
              <li>
                <strong>Foreground Service</strong> &mdash; for Nostr Wallet
                Connect (NWC) integration, which monitors for incoming zap
                requests
              </li>
              <li>
                <strong>Notifications</strong> &mdash; to alert you about
                incoming payments and transaction updates
              </li>
              <li>
                <strong>Location</strong> &mdash; only for the nearby merchants
                map, and only while that screen is open. Declining it leaves the
                rest of the app fully usable.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              The app does not request access to your contacts, microphone, or
              storage. Camera access is used solely for QR code scanning and no
              images are stored or transmitted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              All network communications use encrypted protocols (HTTPS, WSS,
              and QUIC). Privacy sensitive backup data sent to Nostr relays is encrypted
              using NIP-04 encryption so that only you can decrypt it. You may
              optionally set a PIN to protect spending operations. Wallet data
              is stored locally on your device and is protected by your
              device&apos;s own security measures (screen lock, encryption,
              etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Your Choices and Controls
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>
                You choose which federations to join and which Nostr relays to
                use
              </li>
              <li>Contact sync from Nostr is optional and user-controlled</li>
              <li>
                A Lightning Address is claimed automatically when you join a
                federation; you can change or release it in settings
              </li>
              <li>
                The nearby merchants map is the only feature that uses location,
                and it only runs when you open it
              </li>
              <li>
                You can delete all local data by uninstalling the app
              </li>
              <li>
                Your seed phrase gives you full control over your wallet and
                funds
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Children&apos;s Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ecash App is not directed at children under 13. We do not
              knowingly collect any personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Open Source</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ecash App is open-source software. You can review the complete
              source code at{" "}
              <a
                href="https://github.com/fedimint/ecash-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                github.com/fedimint/ecash-app
              </a>{" "}
              to verify the privacy claims made in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this privacy policy, you can reach us
              at{" "}
              <a
                href="mailto:frostforgetech@gmail.com"
                className="text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                frostforgetech@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
