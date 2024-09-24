export default function Counter({counter, setCounter}) {
    
    // let x = useState(0);

    // let counter = x[0];
    // let setCounter = x[1];

    console.log("Counter component called");

    return (
        <>
            <p>You clicked {counter} times.</p>
            <button onClick={() => {
                console.log("előtte");
                console.log(counter);
                setCounter(counter + 1);
                console.log("utána");
                console.log(counter);
                }}>Click me</button>
        </>
    )
}