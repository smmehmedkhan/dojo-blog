import { useState } from "react";
import BlogLists from "./BlogLists";

export default function Home() {
    const [blogs, setBlogs] = useState([
        { id: 999991, title: "My new website", author: "Mario", body: "Lorem ipsum..." },
        { id: 999992, title: "My new website", author: "Mario", body: "Lorem ipsum..." },
        { id: 999993, title: "My new website", author: "Mario", body: "Lorem ipsum..." },
        { id: 999994, title: "My new website", author: "Mario", body: "Lorem ipsum..." },
        { id: 999995, title: "My new website", author: "Mario", body: "Lorem ipsum..." }
    ]);

    return (
        <div className="home">
            <BlogLists blogs={blogs} title={'All Blogs'}  />
        </div>
    );
}