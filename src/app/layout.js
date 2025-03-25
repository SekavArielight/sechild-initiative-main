import { Inter } from 'next/font/google'
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sechild Initiative',
  description: "At SECHILD, we are committed to creating a world where every child with special needs has access to education, healthcare, and equal opportunities. Together, we can make a difference!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
