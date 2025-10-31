import { IoMdBookmark } from "react-icons/io";

const Blog = ({ blog ,handleAddtoBookmark, handleAddtoMarkasread}) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full" src={cover} alt="" />
      <div className="flex  justify-between py-6">
        <div className="flex  gap-6">
          <img className="w-14" src={author_img} alt="" />

          <div>
            <h2 className="text-4xl">{author}</h2>
            <p>
              <samp>{posted_date}</samp>
            </p>
          </div>
        </div>
        <div>
          <div>
            <samp> {reading_time} men ring</samp>
            <button  className="text-2xl ml-2" onClick={()=>handleAddtoBookmark(blog)} >
              <IoMdBookmark />
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-3xl font-bold leading-6 py-6">Title : {title}</h3>
      <p>
        {hashtags.map((has) => (
          <span>
            {" "}
            <a href=""> #{has}</a>
          </span>
        ))}
      </p>

      <button className="pt-4 text-fuchsia-600 font-bold underline" onClick={()=>handleAddtoMarkasread(id,reading_time)}>
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
