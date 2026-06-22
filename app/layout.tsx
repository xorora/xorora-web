import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { VoiceWidget } from "@/components/voice/voice-widget";
import { ConnectedMegaNav, LetsTalkModalProvider } from "@/components/modals";
import { jetbrainsMono, poppins } from "@/lib/fonts";
import {
  buildFooterColumns,
  buildSiteNavigation,
} from "@/lib/navigation/server";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xorora.vercel.app"),
  title: "Xorora — Your AI Development Partner",
  description: "Engineered for your Ambition",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nav, footerColumns] = await Promise.all([
    buildSiteNavigation(),
    buildFooterColumns(),
  ]);
  const industryNames = nav.industries.map((industry) => industry.name);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy-900 font-sans text-white">
        <LetsTalkModalProvider industryNames={industryNames}>
          <ConnectedMegaNav nav={nav} />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer columns={footerColumns} />
        </LetsTalkModalProvider>
        <VoiceWidget />
        <Script
          src="https://losono.xorora.com/embed.js"
          data-agent="xorora"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
