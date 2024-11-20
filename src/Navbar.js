import { Link } from "react-router-dom";

export default function Navbar() {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <ul className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </ul>
        </nav>
    );
}