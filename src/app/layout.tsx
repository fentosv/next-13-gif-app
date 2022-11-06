import '../styles/normalize.css'
import '../styles/reset.local.css'
import '../styles/var.scss'
import '../styles/App.scss'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head>
        <title>Fentos | Next.js 13 </title>
        <meta
          content='width=device-width, initial-scale=1'
          name='viewport'
        />
        <meta
          content='Next.js 13 app'
          name='description'
        />
        <link
          href='/favicon.ico'
          rel='icon'
        />
      </head>
      <body>
        <Navbar />
        <main className='body'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
