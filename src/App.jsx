import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";

import Heder from "./components/Heder/Heder";
import Bookmarks from "./components/Bookmarked/Bookmarks";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [markasread, setMarkasread] = useState([]);

  const handleAddtoBookmark = (blog) => {
    const blogs = bookmarks.find((b) => b.title === blog.title);
    if (blogs) return;
    const newBookmaek = [...bookmarks, blog];
    setBookmark(newBookmaek);
  };

  const handleAddtoMarkasread = (id,time ) => {

    const newmarkasread = Number(markasread) + Number(time);
    setMarkasread(newmarkasread);
   const remov = bookmarks.filter(idx =>idx.id != id)
   setBookmark(remov)
  };

  return (
    <>
      <Heder></Heder>
      <div className="md:flex max-w-7xl mx-auto gap-6 pt-9">
        <Blogs
          handleAddtoMarkasread={handleAddtoMarkasread}
          handleAddtoBookmark={handleAddtoBookmark}
        ></Blogs>
        <Bookmarks 
        markasread={markasread}
        bookmarks={bookmarks}
        ></Bookmarks>
      </div>
    </>
  );
}

export default App;
