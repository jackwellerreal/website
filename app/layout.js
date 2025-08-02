import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./styles.css";

export const metadata = {
    title: "Jack Weller",
    description:
        "My personal website. Here I share my projects and post what I'm up to on my blog",
    themeColor: "#699ce2",
    openGraph: {
        type: "website",
        url: "https://www.jackweller.me",
        images: ["/images/title.png"],
        title: "Jack Weller",
        description:
            "My personal website. Here I share my projects and post what I'm up to on my blog",
        siteName: "Jack Weller",
    },
    twitter: {
        card: "summary_large_image",
        images: ["/images/title.png"],
        title: "Jack Weller",
        description:
            "My personal website. Here I share my projects and post what I'm up to on my blog",
    },
    icons: {
        icon: "/images/icon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="shortcut icon"
                    href="/images/icon.png"
                    type="image/x-icon"
                />
            </head>
            <body>
                <Analytics />
                <SpeedInsights />
                {children}
            </body>
        </html>
    );
}
