import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Sidebar from "@/components/Sidebar";
import { MainContextProvider } from "@/context/MainContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neomorphism mobile and desktop UI",
  description: "Designed and developed by Techdoc",
  metadataBase: new URL("https://weekly-issue2-neomorphism.vercel.app"),
  openGraph: {
    images: [
      {
        url: "https://weekly-issue2-neomorphism.vercel.app/logo.jpg",
        width: 255,
        height: 255,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mobileBg = "bg-gradient-to-t from-[#16171B] to-[#353A40]";
  const desktopBg = "sm:bg-[#16171B]";

  return (
    <html lang="en">
      <body className={cn(inter.className, "h-screen overflow-hidden")}>
        <MaxWidthWrapper>
          <div className="sm:grid-cols-12  sm:grid ">
            <aside className="hidden sm:col-[1/4] sm:flex h-full">
              <Sidebar />
            </aside>
            <MainContextProvider>
              <div className="sm:col-[4/13]   ">{children}</div>
            </MainContextProvider>
          </div>
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
