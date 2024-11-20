import { useState, useEffect } from "react";
import BlogLists from "./BlogLists";

export default function Home() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            });
    }, []);

    return (
        <div className="home">
            { blogs && <BlogLists blogs={blogs} title={'All Blogs'} /> }
        </div>
    );
}