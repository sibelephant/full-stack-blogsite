import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";

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
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
            />
            <Link>Ibrahim Khalid</Link>
            <p>Lorem ipsum dolor sit amet consectetur </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions/>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
