import { useEffect, useState } from "react";

const Blogs = () => {

    const [Blogs,setBlogs] = useState([])
   useEffect(()=>{
    fetch('blogs.json')
    .then(res =>res.json())
    .then(data =>setBlogs(data)
    )


   },[])
console.log(Blogs);


    return (

        <div>
            
        </div>
    );
};

export default Blogs;