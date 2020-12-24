import Head from "next/head";
import { useState } from "react";

import Footer from "../components/footer";
import SearchForm from "../components/search-form";
import Result from "../components/result";
import Search, { GetData } from "../components/search";
import Paginator from "../components/paginator";
import NavBar from "../components/nav";
import ErrorToast from "../components/error-toast";
import Meta from "../components/meta";
import Loading from "../components/loading";

export default function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({
    pagination: {},
    data: [],
    total: 0,
    ratelimit: false,
  });
  const [searching, setSearching] = useState(false);
  const page = async (url) => {
    setSearching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    results.data = [];
    setResults(results);
    let data = await GetData(url);

    setResults({
      pagination: data.pagination,
      data: data.data.items,
      total: data.data.total_count,
      ratelimit: data.ratelimit,
    });
    setQuery("");
    setSearching(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    results.data = [];
    setResults(results);
    setSearch(query);
    setSearching(true);
    let data = await Search(query);
    console.log(data);
    setResults({
      pagination: data.pagination,
      data: data.data.items,
      total: data.data.total_count,
      ratelimit: data.ratelimit,
    });
    setQuery("");
    setSearching(false);
  };
  return (
    <div className="">
      <Head>
        <title>Github User Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="container mx-auto py-2 lg:p-4 min-h-screen ">
        <SearchForm
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          searching={searching}
        />
        <Meta search={search} total={results.total} />
        <div className="min-h- mx-auto w-full sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-2">
          {results.data &&
            results.data.map((x, i) => {
              return <Result key={i} {...x} />;
            })}
          {searching && (
            <div className="flex h-48 w-48 relative sm:col-start-1 lg:col-start-2 col-end-2 justify-self-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
            </div>
          )}
          {results.ratelimit && <ErrorToast />}
        </div>
        {!searching && (
          <Paginator
            total={results.total}
            page={page}
            links={results.pagination}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
