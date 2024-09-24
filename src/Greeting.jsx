export default function Greeting({ name, counter }) {

    return (
        <>
            {
                <div>Hello {(name == null) ? 'world' : name}! Counter is: {counter}</div>
            }
        </>
    )

}