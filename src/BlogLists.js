export default function BlogLists({ blogs, title }) {
    // console.log({ blogs });
    return (
        <>
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </div>
                )) 
            }
        </>
    )
}