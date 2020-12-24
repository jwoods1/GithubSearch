import ParseLink from "parse-link-header";

const Paginator = ({ page, links, total }) => {
  if (total > 12) {
    if (links.prev) {
      return (
        <div className="grid grid-cols-2 mt-2">
          <button
            onClick={() => page(links.prev.url)}
            className="justify-self-start text-white px-8 bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Prev
          </button>
          <button
            onClick={() => page(links.next.url)}
            className="justify-self-end text-white px-8 bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Next
          </button>
        </div>
      );
    }
    if (!links.next) {
      return (
        <div className="grid grid-cols-2 mt-2">
          <button
            onClick={() => page(links.prev.url)}
            className="justify-self-start text-white px-8 bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Prev
          </button>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-2 mt-2">
        <div></div>
        <button
          onClick={() => page(links.next.url)}
          className="justify-self-end text-white px-8 bg-green-500 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Next
        </button>
      </div>
    );
  }
  return <div></div>;
};

export default Paginator;
