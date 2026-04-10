import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Sidebar } from "@/components/nav";
import { Footer } from "@/components/footer";
import faviconSvg from "../../public/favicon.svg";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anil Gurung — Revenue Management Analyst | Media & Data Analytics",
  description:
    "Revenue Management Analyst with 10+ years in media and advertising analytics. Specializing in TV revenue optimization, audience forecasting, pricing strategy, and data-driven insights.",
  icons: {
    icon: faviconSvg.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <Sidebar />
        <div className="pb-16 lg:pl-[68px] lg:pb-0">
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
