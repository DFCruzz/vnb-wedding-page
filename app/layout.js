import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Casamento Vinícius e Beatriz',
  description: 'Vini e a Bia vão casar!!! Aqui você pode encontrar todas as informações sobre essa celebração maravilhosa.',
  icons: {
    icon: "./icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
