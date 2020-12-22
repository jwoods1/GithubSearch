import Head from 'next/head'
import Footer from '../components/footer'
import Search from '../components/search'


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Github User Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
      <h1 className="text-green-600 text-2xl p-4 ">
         Github User Search 
        </h1>
        <Search />
      </main>
    <Footer/>
    </div>
  )
}
