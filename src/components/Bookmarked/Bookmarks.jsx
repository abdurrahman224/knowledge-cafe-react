import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, markasread }) => {
  return (
    <>
      
      <div className="w-1/3 bg-amber-50 p-4 rounded-2xl">
      <h2 className="text-4xl text-center ">
        Spent time on read : {markasread}
      </h2>
        <h2 className="text-4xl text-center ">
          Bookmarked Blogs : {bookmarks.length}{" "}
        </h2>
        {bookmarks.map((bookmar) => (
          <Bookmark bookmar={bookmar}> </Bookmark>
        ))}
      </div>
    </>
  );
};

export default Bookmarks;
