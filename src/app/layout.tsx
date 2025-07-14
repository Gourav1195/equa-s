// app/layout.tsx
import './globals.css'
// import NavInner from './components/NavInner'
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
            {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
