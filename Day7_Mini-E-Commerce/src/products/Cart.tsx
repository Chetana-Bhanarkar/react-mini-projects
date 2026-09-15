import type { CartItems } from "./product.interfaces"

interface CartProps {
    cart: CartItems[];
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void
}
const Cart = ({ cart, increaseQuantity, decreaseQuantity }: CartProps) => {
    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    return (
        <>
            <h2>Cart</h2>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p><span>{item.price} * {item.quantity}</span></p>
                        <div>
                            <div>
                                <button onClick={() => decreaseQuantity(item.id)}>
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button onClick={() => increaseQuantity(item.id)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }


            <p>Your Total amount is : {total}</p>
        </>
    )
};


export default Cart;