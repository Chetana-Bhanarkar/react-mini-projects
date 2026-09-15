import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const IncDec = (action: string) => {
        switch (action) {
            case 'increment':
                return setCount(prev => prev + 1);

            case 'decrement':
                return count <= 0 ? 0 : setCount(prev => prev - 1);

            case 'reset':
                return setCount(0);

            default:
                return setCount(0);
        }
    }

    return (
        <>
            <div className="mx-auto text-center">
                <h1 className="text-4xl text-gray-600 mt-12 mb-3">{count}</h1>
                <button className="border border-gray-500 p-2 bg-gray-300 mx-2" onClick={() => IncDec('increment')}>Increment</button>
                <button className="border border-gray-500 p-2 bg-gray-300 mx-2" onClick={() => IncDec('decrement')}>Decrement</button>
                <button className="border border-gray-500 p-2 bg-gray-300 mx-2" onClick={() => IncDec('reset')}>Reset</button>
            </div>
        </>
    )
};


export default Counter; 