import { Link } from "react-router-dom";
import MainCatergories from "../components/MainCatergories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 ">
      {/*breadcrumbs */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles </span>
      </div>
      {/*introduction */}
      <div className="flex items-center justify-between">
        {/* titles*/}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>

          <p className="nt-8 text-md md:text-xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            repellendus voluptate quo .{" "}
          </p>
        </div>
        {/**animated button */}
        <Link to="write" className="hidden md:block relative">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="animate-spin animatedButton text-lg tracking-widest"
          >
            <path
              id="circlePath"
              d="M 100, 100 m-75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%" className="text-sm">
                Write your story *
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea *
              </textPath>
            </text>
          </svg>
          <button className=" absolute top-0 right-0 left-0 bottom-0 m-auto w-20 h-20  bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
      {/*Catergories */}
      <MainCatergories/>
      {/*featured posts */}
      <FeaturedPosts/>
      {/*post list */}
      <div className="">
        <h1 className="my-9 text-2xl text-gray-600">Recent Posts</h1>
        {/* postlist */}
        <PostList/>
      </div>
    </div>
  );
};

export default HomePage;
