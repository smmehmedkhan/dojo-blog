export default function BlogLists({ blogs, title, handleDelete }) {
    return (
        <>
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                )) 
            }
        </>
    );
}