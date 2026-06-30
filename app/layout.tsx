import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { ConnectedMegaNav, LetsTalkModalProvider } from "@/components/modals";
import { VoiceWidget } from "@/components/voice/voice-widget";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { CLARITY_PROJECT_ID } from "@/lib/clarity";
import { jetbrainsMono, poppins } from "@/lib/fonts";
import {
  buildFooterColumns,
  buildSiteNavigation,
} from "@/lib/navigation/server";
import { SITE_URL } from "@/lib/site-url";
import { GOOGLE_SITE_VERIFICATION } from "@/lib/site-verification";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Xorora — Your AI Development Partner",
  description: "Engineered for your Ambition",
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
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
          data-agent="emma"
          strategy="afterInteractive"
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
        </Script>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
