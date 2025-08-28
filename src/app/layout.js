import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Works only in Server Component (no "use client" here)
export const metadata = {
  title: "Upfloor",
  description: "Upfloor is your trusted real estate partner in Kannur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts & CSS */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="stylesheet" href="/fonts/font-icons.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/styles.css" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/images/logo/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="/images/logo/favicon.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Preloader */}
        <div className="preload preload-container">
          <div className="preload-logo">
            <div className="spinner"></div>
            <span className="icon icon-villa-fill"></span>
          </div>
        </div>

        {children}

        {/* ========= JS Scripts ========= */}
        {/* Core libs */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
 <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"/>
        <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />

        {/* Plugins */}
        <Script src="/js/carousel.js" strategy="afterInteractive" />
        <Script src="/js/plugin.js" strategy="afterInteractive" />
        <Script src="/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        
        {/* <Script src="/js/rangle-slider.js" strategy="afterInteractive" /> */}
        <Script src="/js/countto.js" strategy="afterInteractive" />
        <Script src="/js/shortcodes.js" strategy="afterInteractive" />
        <Script src="/js/animation_heading.js" strategy="afterInteractive" />
        <Script src="/js/lazysize.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />





      </body>
    </html>
  );
}
