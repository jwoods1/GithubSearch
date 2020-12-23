
const SearchForm = ({query, setQuery, handleSubmit, searching}) => {
   
    return (
    <section className="text-gray-700 body-font my-4">
        <form onSubmit={handleSubmit} className="container mx-auto" >
            <div className="sm:grid sm:grid-cols-2 gap-2 items-end">
                <div className="">
                    <input placeholder="Search by name or email" value={query}  onChange={({target}) => setQuery(target.value)} type="text" name="search" className="block pl-2 w-11/12 rounded focus:border-green-500 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button type="submit" disabled={searching || query.length === 0}  className="text-white w-11/12 lg:w-48 justify-self-start mt-2 lg:mt-0 lg:ml-4 bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg">Search</button>
            </div>
        </form>
        
    </section>
    )
}
export default SearchForm;