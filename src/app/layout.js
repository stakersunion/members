import '@/app/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/utils/shadcn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Stakers Union Members',
  description: 'Membership Site for the Stakers Union',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang={'en'}
        suppressHydrationWarning
      >
        <head />
        <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
