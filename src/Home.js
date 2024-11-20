import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

export default function Home() {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
            });
        }, 1000);
    }, []);

    return (
        <div className="home">
            { isPending && <div>
                <p>Loading...</p>
            </div> }
            { blogs && <BlogLists blogs={blogs} title={'All Blogs'} /> }
        </div>
    );
}