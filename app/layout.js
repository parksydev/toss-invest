import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '토스증권 - 토스 모의투자 시작하기',
  description: '투자를 모두에게 토스증권',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <title>토스증권</title>
        <link rel="icon" href="/img/toss-symbol-primry.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
