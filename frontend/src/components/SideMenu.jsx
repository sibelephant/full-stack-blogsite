import { Link } from "react-router-dom";
import Search from "../components/Search";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-4 text-sm font-medium">Filters</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value="newest" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-md bg-white checked:bg-blue-700"/>
          Newset
        </label>

            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value="most-popular" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-md  bg-white checked:bg-blue-700"/>
          Most Popular
        </label>

            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value="trending" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-md bg-white checked:bg-blue-700"/>
          Trending
        </label>

            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value="oldest" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-md bg-white checked:bg-blue-700"/>
          Oldest
        </label>
      </div>
      <h1 className="mt-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to={`/posts`}>
          All
        </Link>
        <Link className="underline" to={`/posts`}>
          Web Design
        </Link>
        <Link className="underline" to={`/posts?cat=web-design`}>
          Development
        </Link>
        <Link className="underline" to={`/posts?cat=database`}>     
          Database
        </Link>
        <Link className="underline" to={`/posts?cat=seo`}>
          Search Engines
        </Link>
        <Link className="underline" to={`/posts?cat=marketing`}>
          Marketing
        </Link>
      
      </div>
    </div>
  );
};

export default SideMenu;
