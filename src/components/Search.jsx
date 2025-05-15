const Search = () => {
  return (
    <div className="bg-gray-100 flex rounded-full items-center gap-2 ">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-500 cursor-pointer"
      >
        <path
          d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input 
        type="text" 
        placeholder="Search..." 
        className="bg-transparent outline-none py-4"
      /> 
    </div>
  );
};

export default Search;
