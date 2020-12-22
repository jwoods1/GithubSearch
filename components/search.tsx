//const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
import { useState } from 'react';
import Paginator from './paginator';
import Result from './result';


const SearchGithub = (query) => {
    let q = query.includes("@") ? `${query} in:email` : `fullname:${query}`;
    const requestUrl = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&per_page=12`;
    const result = {pagination: {}, data:{items:[], total_count:0}};
    return fetch(requestUrl)
    .then(response => {
        result.pagination = GetPaginationLinks(response);
       return response.json();
    })
    .then(data => {
        result.data = data;
        return result;
    });
}

const GetPaginationLinks = (resp) => {
    let links = resp.headers.get('link');
    if(links){
       return Paginator(links)
    }
    return {}
}

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({pagination: {}, data:[], total: 0});
    const handleSubmit  = (event) =>{
        event.preventDefault();
        SearchGithub(query)
        .then(result => {
            setResults({pagination: result.pagination, data: result.data.items, total: result.data.total_count});
            setQuery('');
            console.log(result);
        });
    }
    return (
    <section className="text-gray-700 body-font">
        <form onSubmit={handleSubmit} className="container px-5 py-24 mx-auto">
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end">
                <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                    <label htmlFor="search" className="leading-7 text-sm text-gray-600">Search</label>
                    <input  value={query}  onChange={({target}) => setQuery(target.value)} type="text" name="search" className="search" />
                </div>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
        </form>
        <div className="grid grid-cols-4 gap-2">
            {results.data && results.data.map((x,i) => {
                return <Result key="i" {...x} />
            })}
        </div>
    </section>
    )
}
export default Search;