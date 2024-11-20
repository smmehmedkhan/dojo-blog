import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";
import useFetch from "./useFetch";

export default function Home() {
    const url = 'http://localhost:8000/blogs';
    const { data: blogs, isPending, error } = useFetch(url);

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