import { useState } from "react"

export default function Create() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('mario');

    function handleSubmit(e) {
        e.preventDefault();
        const blog = {
            title,
            author,
            content
        };
        console.log(blog);
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required 
                />
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yushi">Yushi</option>
                </select>
                <button>Add blog</button>
            </form>

            <div className="blog-preview">
                <article>
                    <h2>{ title }</h2>
                    <h3>{ author }</h3>
                    <p>{ content }</p>
                </article>
            </div>
        </div>
    )
}