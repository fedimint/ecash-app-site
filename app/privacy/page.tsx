import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ecash App by Frost Forge.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pb-12">
      <Header />
      <div className="container mx-auto px-4 pt-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: April 6, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Frost Forge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
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
              Ecash App does not collect, store, or transmit any personal
              information to Frost Forge. Specifically:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
              <li>No analytics or telemetry</li>
              <li>No crash reporting</li>
              <li>No advertising or tracking SDKs</li>
              <li>No device identifiers or fingerprinting</li>
              <li>No email addresses, phone numbers, or real names</li>
              <li>No location data</li>
              <li>No user accounts or passwords</li>
            </ul>
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
              This data never leaves your device unless you explicitly initiate
              an action that requires network communication, as described below.
              Uninstalling the app removes all local data.
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
              By default, the app registers a Lightning Address on your behalf
              to enable receiving Lightning payments. Your chosen username and
              payment endpoint are sent to the Lightning Address service
              provider (by default, ecash.love). You may opt out of this
              feature in the app settings.
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
                registration (enabled by default, can be opted out)
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
              The app requests the following Android permissions:
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
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              The app does not request access to your contacts, location,
              microphone, or storage. Camera access is used solely for QR code
              scanning and no images are stored or transmitted.
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
                Lightning Address registration is enabled by default but can be
                opted out
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
