const Bookmark = ({ bookmar }) => {
  const { title } = bookmar;

  return (
    <div className="bg-amber-100 p-4 m-4 rounded-2xl hover:bg-amber-200 hover:transform scale-110 transition ">
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
};

export default Bookmark;
