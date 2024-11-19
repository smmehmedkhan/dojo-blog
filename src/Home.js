import { useState } from "react";
import BlogLists from "./BlogLists";

export default function Home() {
    const [blogs, setBlogs] = useState([
        { id: 999991, title: "My new website", author: "Mario", body: "Lorem ipsum..." },
        { id: 999992, title: "Super market day", author: "Yushi", body: "Lorem ipsum..." },
        { id: 999993, title: "The day of doone", author: "Mario", body: "Lorem ipsum..." },
        { id: 999994, title: "All we know", author: "Charlie", body: "Lorem ipsum..." },
        { id: 999995, title: "The medbot blogs", author: "Mehmed", body: "Lorem ipsum..." }
    ]);

    return (
        <div className="home">
            <BlogLists blogs={blogs} title={'All Blogs'}  />
            <BlogLists blogs={blogs.filter((blog) => blog.author === 'Mario')} title={"Mario's Blogs"}  />
        </div>
    );
}