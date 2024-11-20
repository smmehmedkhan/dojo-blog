import { useState } from "react"
import { useHistory } from "react-router-dom";

export default function Create() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsPending(true)
        const blog = {
            title,
            author,
            body: content
        };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('Added a new blog');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
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
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog ...</button> }
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