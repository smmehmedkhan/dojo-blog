import { useState } from "react";
import BlogLists from "./BlogLists";

export default function Home() {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "My new website", author: "Mario", body: "Lorem ipsum..." },
        { id: 2, title: "Super market day", author: "Yushi", body: "Lorem ipsum..." },
        { id: 3, title: "The day of doone", author: "Mario", body: "Lorem ipsum..." },
        { id: 4, title: "All we know", author: "Charlie", body: "Lorem ipsum..." },
        { id: 5, title: "The medbot blogs", author: "Mehmed", body: "Lorem ipsum..." }
    ]);

    function handleDelete(id) {
        const newBlog = blogs.filter((blog) => blog.id !== id );
        setBlogs(newBlog);
    }

    return (
        <div className="home">
            <BlogLists blogs={blogs} title={'All Blogs'} handleDelete={handleDelete} />
        </div>
    );
}