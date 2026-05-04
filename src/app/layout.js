import { Toaster } from 'react-hot-toast'
import NavbarWrapper from '@/components/NavbarWrapper'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'SkillSphere',
  description: 'Master real-world skills with expert-led courses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: '#0a0a0a', color: '#F5F0E8' }}>
        <Toaster position="top-right" />
        <NavbarWrapper />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
