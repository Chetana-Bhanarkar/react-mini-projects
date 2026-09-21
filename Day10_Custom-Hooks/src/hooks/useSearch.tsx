import { useState } from "react";

const useSearch = <T,>(
    data: T[],
    searchFields: (keyof T)[]
) => {
    const [items, setItems] = useState('');

    const filteredItems = () => {
        console.log(items)
        if (!items.trim()) {
            return data;
        }

        return data.filter((item) => searchFields.some((field) =>
            String(item[field]).toLowerCase().includes(items.toLowerCase())
        )
        )
    }

    return {
        items,
        setItems,
        filteredItems
    }
};


export default useSearch;