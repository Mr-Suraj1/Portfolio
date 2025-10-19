import type React from "react"
import type { Metadata } from "next"
import { Inter, Allura } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import AnalyticsTracker to ensure it only runs on client
const AnalyticsTracker = dynamic(() => import("@/components/analytics-tracker"), {
  ssr: false,
})

const inter = Inter({ subsets: ["latin"] })
const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura"
})

export const metadata: Metadata = {
  title: "Full-Stack Developer Portfolio",
  description: "A professional portfolio showcasing full-stack development skills and projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${allura.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
          <Suspense fallback={null}>
            <AnalyticsTracker />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
