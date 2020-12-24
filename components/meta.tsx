const Meta = ({ total, search }) => {
  return (
    <div>
      <h2
        className={`${
          total > 0 ? "" : "hidden"
        } text-2xl mb-0 font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate`}
      >
        {total} Results for: <span className="bold">{search}</span>
      </h2>
      <div
        className={`${
          total > 0 ? "" : "hidden"
        } mb-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6`}
      >
        <div className="mt-2 flex items-center text-sm text-gray-500"></div>
      </div>
    </div>
  );
};
export default Meta;
