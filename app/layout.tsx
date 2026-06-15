import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mirai Cloud | Empowering Businesses with Cloud, Cybersecurity & IT Infrastructure Solutions",
  description: "We design, secure and manage the digital foundations that help organisations scale with confidence. Specialising in Cloud Services, Cybersecurity, Network Infrastructure, and Managed IT Services.",
  keywords: [
    "Mirai Cloud",
    "IT Services",
    "Cloud Services",
    "Cybersecurity solutions",
    "Network Infrastructure",
    "Data Center solutions",
    "Managed IT support",
    "CCTV surveillance",
    "Website Development",
  ],
  authors: [{ name: "Mirai Cloud Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Mirai Cloud | Premium Cloud, Cybersecurity & IT Solutions",
    description: "Enterprise-grade digital foundations that help modern organizations scale securely.",
    type: "website",
    locale: "en_US",
    siteName: "Mirai Cloud IT Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
