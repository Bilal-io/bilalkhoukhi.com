import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container px-6 lg:px-0 w-full max-w-2xl mx-auto mt-8 md:mt-24 mb-16">
        {children}
      </main>

      <Footer />
    </>
  )
}
