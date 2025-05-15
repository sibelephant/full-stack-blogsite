import Image from "./Image";
import {Link} from "react-router-dom"

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
        <div className="md:hidden xl:block w-1/3">
            <Image src="postImg.jpeg" className="rounded-2xl object-cover"/>
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 w-2/3">
            <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit!</Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm ">
                <span>Written by:</span>
                <Link className="text-blue-800">Ibrahim Khalid</Link>
                <span>on</span>
                <Link className="text-blue-800">Web Design</Link>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eaque atque explicabo rem blanditiis at omnis aspernatur, vel quam quia laudantium est esse laborum, ipsam odio commodi quis perferendis molestiae.</p>
            <Link to="/test" className="underline text-blue-800 text-sm"> Read more</Link>
        </div>
    </div>
  )
}

export default PostListItem