import { Link } from "react-router-dom";

export default function BlogLists({ blogs, title }) {
    return (
        <>
            <h2 className="blog-main-title">{ title }</h2>
            { blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                    </div>
                )) 
            }
        </>
    );
}