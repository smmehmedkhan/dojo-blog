const Home = () => {
    const handleClick = () => {
        console.log('Hello!');
    }
    function handleClick2(name) {
        console.log(`Hello ${name}!`);
    }
    function handleClick3(e) {
        console.log(e.target);
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>My Button</button>
            <button onClick={() => handleClick2('Mario')}>My Button 2</button>
            <button onClick={handleClick3}>My Button 3</button>
        </div>
    );
}
 
export default Home;