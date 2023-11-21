import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import clsx from "clsx"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Das Boot wars!",
  description: "Ontdek de waarheid, op 24 november!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "h-screen w-screen")}>{children}</body>
    </html>
  )
}
