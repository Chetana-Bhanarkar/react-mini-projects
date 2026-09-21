import useCounter from "../hooks/useCounter"

const Counter = () => {
    const counter = useCounter(10);

    return(
        <>
            <h1>{counter.count}</h1>
            <button onClick={counter.increment}>Increment</button>
            <button onClick={counter.decrement}>Decrement</button>
            <button onClick={counter.reset}>Reset</button>
        </>
    )
};


export default Counter;