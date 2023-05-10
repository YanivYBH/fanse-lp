import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { poppins } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Fanse - Its more than just a platform",
  description:
    "Fanse is a revolutionary platform that empowers Adult Creators to create the content they love.",
  twitter: {
    card: "summary_large_image",
    title: "Fanse - Its more than just a platform",
    description:
      "Fanse is a revolutionary platform that empowers Adult Creators to create the content they love.",
    creator: "@fanseplatform",
  },
  metadataBase: new URL("https://fanse.co"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
