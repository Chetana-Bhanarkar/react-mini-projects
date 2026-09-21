import { useState } from "react";

const useToggle = (value : boolean) => {
    const [toggleValue, setToggleValue] = useState<boolean>(value);

    const toggleText = () => {
        setToggleValue( value => !value)
    }

    return {
        toggleText,
        toggleValue
    }
    
};


export default useToggle;