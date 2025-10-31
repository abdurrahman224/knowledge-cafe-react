import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddtoBookmark, handleAddtoMarkasread }) => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(Blogs);

  return (
    <div className="w-2/3">
      <h2 className="text-4xl">blogs : {Blogs.length}</h2>
      {Blogs.map((blog) => (
        <Blog
          blog={blog}
           handleAddtoMarkasread={handleAddtoMarkasread}
          handleAddtoBookmark={() => handleAddtoBookmark(blog)
}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
