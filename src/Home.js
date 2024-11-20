import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

export default function Home() {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error("Didn't find that resource on database.");
                    } 
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(false);
                })
                .catch(err => {
                    setError(err.massage)
                    setIsPending(false);
                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            { isPending && <div>
                    <p>Loading...</p>
                </div> 
            }

            { error && <div>{ error }</div> }

            { blogs && <BlogLists blogs={blogs} title={'All Blogs'} /> }
        </div>
    );
}