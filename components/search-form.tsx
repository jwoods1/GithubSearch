const SearchForm = ({ query, setQuery, handleSubmit, searching }) => {
  return (
    <section className="text-gray-700 body-font my-4 w-2/3 mx-auto flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center"
      >
        <div className="relative mx-0 flex-1">
          <input
            className="md:mr-2 py-2 px-8 border-0 text-lg rounded focus:outline-none"
            type="text"
            placeholder="Search by name or email"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={searching || query.length === 0}
          className="mt-2 md:mt-0 disabled:opacity-50 text-white px-8 bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg "
        >
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
