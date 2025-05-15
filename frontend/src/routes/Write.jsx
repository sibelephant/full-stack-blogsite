import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";

import ReactQuill from "react-quill-new";

function Write() {
  //mini auth logic

  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div className="">Loading.....</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="i">You should login!</div>;
  }

  return (
    <div className="md:h-[calc(100vh - 80px)] h-[calc(100vh -64px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a new Post </h1>
      <form action="" className="flex flex-col gap-6 flex-1 mb-6 ">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a Cover image{" "}
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">Choose a category</label>
          <select name="cat" id="" className="p-2 rounded-xl bg-white shadow">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Databases</option>
            <option value="seo">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" className="p-4 rounded-xl bg-white shadow" placeholder="A Short Description" />
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow " />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">Send</button>
      </form>
    </div>
  );
}

export default Write;
