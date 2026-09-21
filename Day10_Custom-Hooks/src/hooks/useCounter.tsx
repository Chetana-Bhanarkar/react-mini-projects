import { useState } from "react";

const useCounter = (initalVal : number) => {
    const [count, setCount] = useState(initalVal);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        if(count <= 0){
            setCount(0);
            return;
        };

        setCount((prev) => prev - 1);
    };

    const reset = () => {
        setCount(initalVal);
    }

    return{
        count,
        increment,
        decrement,
        reset
    }
};


export default useCounter;