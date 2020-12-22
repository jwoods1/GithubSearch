
const SearchForm = ({query, setQuery, handleSubmit}) => {
   
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
       
    </section>
    )
}
export default SearchForm;