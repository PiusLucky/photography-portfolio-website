import type { Metadata } from 'next'
import './globals.css'
import { Manrope } from "next/font/google"


export const metadata: Metadata = {
  title: 'Photography Portfolio Website',
  description: 'The best portfolio website',
}

const manrope = Manrope({ subsets: ['latin'], weight: ["400", "500", "600"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={manrope.className} >{children}</body>
    </html>
  )
}
