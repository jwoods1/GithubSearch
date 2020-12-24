const SearchForm = ({ query, setQuery, handleSubmit, searching }) => {
  return (
    <section className="text-gray-700 body-font my-4 lg:w-2/3 mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-2">
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
          <input
            className="form-input sm:w-11/12 lg:w-11/12 rounded-md pl-10 pr-4 py-2 text-base outline-none"
            type="text"
            placeholder="Search by name or email"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={searching || query.length === 0}
            className=" text-white ml-8 px-8 bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
