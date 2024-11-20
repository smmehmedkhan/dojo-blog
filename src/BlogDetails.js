import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function BlogDetails() {
    const history = useHistory();
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    function handleDelete() {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        });
    }

    return (
        <div className="blog-details">
            { isPending && <div className="loading">
                    <p>Loading...</p>
                </div> 
            }

            { error && <div className="error">{ error }</div> }

            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h3>Written by { blog.author }</h3>
                    <p>{ blog.body }</p>
                    <hr />
                    <button onClick={ handleDelete }>Delete blog</button>
                </article>
            )}
        </div>
    );
}