import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { validateSiteConfig } from "@/config/validateSiteConfig";

// 2.5-F2: Validate siteConfig at build time — throws with field-level errors if anything is missing
validateSiteConfig(siteConfig);

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata = {
    metadataBase: new URL("https://kerman-chamber.vercel.app"),
    title: {
        default: siteConfig.orgName,
        template: `%s | ${siteConfig.orgName}`,
    },
    description: siteConfig.description,
    keywords: ["chamber of commerce", siteConfig.city, siteConfig.state, "business", "local"],
    openGraph: {
        title: siteConfig.orgName,
        description: siteConfig.description,
        type: "website",
        // 2.5-E4: og:image
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: `${siteConfig.orgName} — ${siteConfig.tagline}`,
            },
        ],
    },
    // 2.5-E5: twitter:card
    twitter: {
        card: "summary_large_image",
        title: siteConfig.orgName,
        description: siteConfig.description,
        images: ["/og-image.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                {/* 2.5-E6: preconnect for Google Fonts / APIs */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-body text-text-body bg-bg-light antialiased overflow-x-hidden flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
