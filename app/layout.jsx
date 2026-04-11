import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Monstro DeFi',
    template: '%s | Monstro DeFi',
  },
  description:
    'Official documentation for the Monstro DeFi ecosystem. Learn about $MONSTRO tokenomics, staking, governance, and more.',
  openGraph: {
    title: 'Monstro DeFi Documentation',
    description:
      'Official documentation for the Monstro DeFi ecosystem. Learn about $MONSTRO tokenomics, staking, governance, and more.',
    siteName: 'Monstro DeFi Docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monstro DeFi Documentation',
    description:
      'Official documentation for the Monstro DeFi ecosystem.',
  },
  metadataBase: new URL('https://docs.monstrodefi.com'),
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.15rem' }}>
        🟠 Monstro DeFi
      </span>
    }
    projectLink="https://github.com/monstrodefi"
  />
)

const footer = (
  <Footer>
    <span>
      © {new Date().getFullYear()} Monstro DAO. All rights reserved.
    </span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
          darkMode={true}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
