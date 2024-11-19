import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);

    function handleClick() {
        setName('Yushi');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <hr />
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Change</button>
        </div>
    );
}
 
export default Home;