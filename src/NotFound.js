import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="not-found">
            <h3>404</h3>
            <p>Sorry, that page cannot be found.</p>
            <Link to='/'>Back to homepage</Link>
        </div>
    );
}