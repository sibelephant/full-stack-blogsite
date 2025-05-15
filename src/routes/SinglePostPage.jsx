import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 ">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8 ">
          <h1 className="lg:text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Khalid Ibrahim</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo
            incidunt veniam tempora voluptatibus facilis quia expedita totam,
            dolorem ab minima cupiditate asperiores nostrum quidem et maxime
            possimus quod accusamus?
          </p>
        </div>
        <div className="hidden lg:block w-2/5 ">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nostrum minus blanditiis, perferendis natus, accusamus praesentium
            laudantium officia itaque corporis ullam a quasi obcaecati deserunt
            consectetur mollitia debitis! Impedit, quas! Dolores voluptates
            dicta, impedit odit laborum possimus cumque voluptas modi dolorum.
            Aliquid accusantium exercitationem ex dolorem quis quae, enim, porro
            labore voluptatum ipsa animi sint quam id vero nesciunt unde.
            Commodi, sapiente obcaecati ab, fuga consequatur voluptatibus hic
            voluptatum cumque neque deleniti minima culpa reprehenderit
            praesentium sint quam. Harum saepe dignissimos fugit aperiam eius
            fugiat ipsum. Modi nulla dolorum voluptates. Reiciendis odit ut
            nihil, tempore blanditiis quisquam laboriosam unde nisi rem, illo
            rerum accusantium atque nobis voluptates laborum! Id voluptas
            quaerat velit sed dolore eligendi voluptatem architecto obcaecati
            nostrum itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nostrum minus blanditiis, perferendis natus, accusamus praesentium
            laudantium officia itaque corporis ullam a quasi obcaecati deserunt
            consectetur mollitia debitis! Impedit, quas! Dolores voluptates
            dicta, impedit odit laborum possimus cumque voluptas modi dolorum.
            Aliquid accusantium exercitationem ex dolorem quis quae, enim, porro
            labore voluptatum ipsa animi sint quam id vero nesciunt unde.
            Commodi, sapiente obcaecati ab, fuga consequatur voluptatibus hic
            voluptatum cumque neque deleniti minima culpa reprehenderit
            praesentium sint quam. Harum saepe dignissimos fugit aperiam eius
            fugiat ipsum. Modi nulla dolorum voluptates. Reiciendis odit ut
            nihil, tempore blanditiis quisquam laboriosam unde nisi rem, illo
            rerum accusantium atque nobis voluptates laborum! Id voluptas
            quaerat velit sed dolore eligendi voluptatem architecto obcaecati
            nostrum itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nostrum minus blanditiis, perferendis natus, accusamus praesentium
            laudantium officia itaque corporis ullam a quasi obcaecati deserunt
            consectetur mollitia debitis! Impedit, quas! Dolores voluptates
            dicta, impedit odit laborum possimus cumque voluptas modi dolorum.
            Aliquid accusantium exercitationem ex dolorem quis quae, enim, porro
            labore voluptatum ipsa animi sint quam id vero nesciunt unde.
            Commodi, sapiente obcaecati ab, fuga consequatur voluptatibus hic
            voluptatum cumque neque deleniti minima culpa reprehenderit
            praesentium sint quam. Harum saepe dignissimos fugit aperiam eius
            fugiat ipsum. Modi nulla dolorum voluptates. Reiciendis odit ut
            nihil, tempore blanditiis quisquam laboriosam unde nisi rem, illo
            rerum accusantium atque nobis voluptates laborum! Id voluptas
            quaerat velit sed dolore eligendi voluptatem architecto obcaecati
            nostrum itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nostrum minus blanditiis, perferendis natus, accusamus praesentium
            laudantium officia itaque corporis ullam a quasi obcaecati deserunt
            consectetur mollitia debitis! Impedit, quas! Dolores voluptates
            dicta, impedit odit laborum possimus cumque voluptas modi dolorum.
            Aliquid accusantium exercitationem ex dolorem quis quae, enim, porro
            labore voluptatum ipsa animi sint quam id vero nesciunt unde.
            Commodi, sapiente obcaecati ab, fuga consequatur voluptatibus hic
            voluptatum cumque neque deleniti minima culpa reprehenderit
            praesentium sint quam. Harum saepe dignissimos fugit aperiam eius
            fugiat ipsum. Modi nulla dolorum voluptates. Reiciendis odit ut
            nihil, tempore blanditiis quisquam laboriosam unde nisi rem, illo
            rerum accusantium atque nobis voluptates laborum! Id voluptas
            quaerat velit sed dolore eligendi voluptatem architecto obcaecati
            nostrum itaque.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
              />
              <Link className="text-blue-800">Ibrahim Khalid</Link>
            </div>
            <p className="text-sm text-gray-500 ">Lorem ipsum dolor sit amet consectetur </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm ">
            <Link className="underline ">All</Link>
            <Link className="underline ">Web Design</Link>
            <Link className="underline ">Development</Link>
            <Link className="underline ">Databases</Link>
            <Link className="underline ">Search Engine</Link>
            <Link className="underline ">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
