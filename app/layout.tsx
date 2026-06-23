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
    "IT services company in Hyderabad",
    "Managed IT services provider India",
    "Best IT support services for businesses",
    "IT infrastructure solutions company",
    "IT AMC services Hyderabad",
    "IT support for small business India",
    "Business IT solutions provider",
    "Cloud solutions company in India",
    "Cloud migration services Hyderabad",
    "AWS cloud consulting services India",
    "Azure cloud services provider Hyderabad",
    "Google Cloud services company India",
    "Cloud backup solutions for business",
    "Cloud infrastructure management services",
    "Hybrid cloud solutions provider",
    "Firewall installation services Hyderabad",
    "Network security solutions for businesses",
    "Cybersecurity services company India",
    "Endpoint security solutions provider",
    "Business data protection services",
    "Antivirus solutions for companies",
    "IT security audit services Hyderabad",
    "Ransomware protection solutions",
    "Network setup services Hyderabad",
    "Office network installation company",
    "Structured cabling services India",
    "Enterprise networking solutions",
    "LAN WAN setup services",
    "Network monitoring services provider",
    "Wireless networking solutions business",
    "CCTV installation services Hyderabad",
    "Office surveillance solutions India",
    "Security camera installation company",
    "IP camera setup services",
    "CCTV AMC services Hyderabad",
    "Business security systems installation",
    "Remote CCTV monitoring solutions",
    "IT AMC services for companies",
    "Annual maintenance contract IT services",
    "IT support company near me",
    "Outsourced IT support India",
    "Remote IT support services",
    "Desktop support services company",
    "Server maintenance services Hyderabad",
    "best IT support company for small business in Hyderabad",
    "affordable cloud solutions for startups India",
    "how to secure business network from hackers",
    "cost of CCTV installation for office Hyderabad and AP",
    "IT AMC services pricing Hyderabad",
    "benefits of cloud backup for small business",
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/mirai_logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/mirai_logo.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N68TZXRV');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N68TZXRV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
