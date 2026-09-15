import { useEffect, useState } from "react";

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 2000
    }
];


type Product = {
    id: number,
    name: string,
    price: number
}


type Cart = Product & {
    count: number
}

const ShoppingCart = () => {
    const productsList = products;
    const [cart, setCart] = useState<Cart[]>([]);

    const totalItemPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);


    useEffect(() => {
        console.log(totalItemPrice);
    }, [totalItemPrice]);


    const addItem = (item: any) => {
        const existingItem = cart.some((cartItem: any) => cartItem.id === item.id);


        if (existingItem) {
            setCart((prevCart: any) =>
                prevCart.map((cartItem: any) => (
                    cartItem.id === item.id ?
                        { ...cartItem, count: cartItem.count + 1 } :
                        cartItem
                ))
            )
        } else {
            const newitem = {
                ...item,
                count: 1
            };

            setCart((prevItem: any) => [...prevItem, newitem]);
        }
    };


    const removeItem = (id: number) => {
        const itemToRemove = cart.find((item: any) => item.id === id);


        if (!itemToRemove) return;

        setCart((prevItem: any[]) =>
            prevItem.filter((item: any) => item.id !== id)
        );
    };


    const decreaseItem = (id: number) => {
        const findItem = cart.find((item: any) => item.id === id);

        if (!findItem) return;

        if (findItem.count === 1) {
            setCart((prev: any) => prev.filter((item: any) => item.id !== id));
        } else {
            setCart((prevItem: any) => prevItem.map((cartItem: any) => (
                cartItem.id === id ?
                    {
                        ...cartItem,
                        count: cartItem.count - 1
                    } :
                    cartItem
            )))
        }
    }

    return (
        <>
            <div className="mt-5">
                <table className="mx-auto ">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productsList.map(prod => (
                                <tr key={prod.id}>
                                    <td>{prod.name}</td>
                                    <td>{prod.price}</td>
                                    <td>
                                        <button className="border border-gray-200 px-2 bg-gray-300"
                                            onClick={() => addItem(prod)}>Add</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


            <div>
                <h4>Cart Items</h4>
                <div>
                    {
                        cart.map((item: any) => (
                            <p key={item.id}>{item.name} . {item.price} . {item.count} .
                                <button className="border border-gray-500 p-1 m-1" onClick={() => removeItem(item.id)}> Remove item </button>
                                <button className="border border-gray-500 p-1 m-1" onClick={() => decreaseItem(item.id)}> Decrease item </button>
                            </p>
                        ))
                    }

                    <div className="mt-5">
                        <p>Total Items : {cart.length}</p>
                        <p>Total : {totalItemPrice}</p>
                    </div>
                </div>
            </div>
        </>
    )
};



export default ShoppingCart;