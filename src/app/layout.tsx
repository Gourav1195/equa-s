// app/layout.tsx
import { AuthProvider } from '../context/AuthContext'
import { QuestionProvider } from '../context/QuestionContext'

import './globals.css'
import Navbar from './navbar'
import NavInner from './components/NavInner'
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QuestionProvider>
          <AuthProvider>
            <NavInner>
            {children}
            </NavInner>
          </AuthProvider>
        </QuestionProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
