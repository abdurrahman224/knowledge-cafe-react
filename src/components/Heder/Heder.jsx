import profile from "../../assets/images/profile.png";

const Heder = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-3 max-w-7xl  mx-auto ">
      <h1 className="text-4xl font-bold">knowledge-cafe-react</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Heder;
