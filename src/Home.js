import { useState } from "react";

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
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            )) }
        </div>
    );
}