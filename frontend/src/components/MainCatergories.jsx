import { Link } from "react-router-dom";

const MainCatergories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full shadow-lg items-center justify-center gap-8 pr-3">
      {/**Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat#web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat#development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat#database"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Database
        </Link>
        <Link
          to="/posts?cat#search-engines"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat#marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>

      <span className="text-xl font-medium">|</span>
      {/**search */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input type="text" placeholder="search a post ..."  className="bg-transparent" />
      </div>
    </div>
  );
};

export default MainCatergories;
