import Head from 'next/head'
import { useState } from 'react';

import Footer from '../components/footer'
import SearchForm from '../components/search-form/search-form'
import Result from '../components/result'
import Search,{GetData} from '../components/search';
import Paginator from '../components/paginator';

export default function Home() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [results, setResults] = useState({pagination: {}, data:[], total: 0, ratelimit: false});
  const [searching, setSearching] = useState(false);
  const page = async (url) =>{
    setSearching(true);
    results.data = [];
    setResults(results);
      let data = await GetData(url);
    
      setResults({pagination: data.pagination, data: data.data.items, total: data.data.total_count, ratelimit: data.ratelimit});
      setQuery('');
      setSearching(false);
  }
  const handleSubmit  = async (event) =>{
      event.preventDefault();
      results.data = [];
      setResults(results);
      setSearch(query);
      setSearching(true);
      let data = await Search(query);
      console.log(data.pagination)
      setResults({pagination: data.pagination, data: data.data.items, total: data.data.total_count, ratelimit: data.ratelimit});
      setQuery('');
      setSearching(false);
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
        <div className="grid grid-cols-3 gap-2">
        <div className={search.length > 0 ? "col-span-3" : "hidden"} >Results for: {search}, total: {results.total}</div>
            {results.data && results.data.map((x,i) => {
                return <Result key={i} {...x} />
            })}
             {searching && (<div className="flex h-48 w-48 relative col-start-2 col-end-2 justify-self-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
      </div>)}
      {results.ratelimit && (<div className="text-xl h-48 text-gray-800 col-start-2 col-span-1 justify-self-center">
        <p className="text-gray-400 text-center">RATE LIMIT EXCEEDED</p>
        <p className="text-sm text-gray-400 text-center">Please try again after a minute.</p></div>)}
        </div>
        {!searching && 
        <Paginator total={results.total} page={page} links={results.pagination}/>
        }
      </main>
    <Footer/>
    </div>
  )
}
