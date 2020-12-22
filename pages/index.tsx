import Head from 'next/head'
import { useState } from 'react';

import Footer from '../components/footer'
import SearchForm from '../components/searchForm'
import Result from '../components/result'
import Search,{GetData} from '../components/search';
import Paginator from '../components/paginator';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({pagination: {}, data:[], total: 0});
  const page = (url) =>{
      GetData(url).then(
        result => {
          setResults({pagination: result.pagination, data: result.data.items, total: result.data.total_count});
          setQuery('');
        }
      )
  }
  const handleSubmit  = (event) =>{
      event.preventDefault();
      
      Search(query).then(
        result => {
          setResults({pagination: result.pagination, data: result.data.items, total: result.data.total_count});
          setQuery('');
        }
      )
     
         
     
  }
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
        <SearchForm query={query} setQuery={setQuery} handleSubmit={handleSubmit}/>
        <div className="grid grid-cols-4 gap-2">
            {results.data && results.data.map((x,i) => {
                return <Result key={i} {...x} />
            })}
            
        </div>
        <Paginator total={results.total} page={page} links={results.pagination}/>
      </main>
    <Footer/>
    </div>
  )
}
