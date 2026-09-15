import type { ProductItems } from "./product.interfaces";

interface ProductCardProps {
    product: ProductItems,
    addToCart: (product: ProductItems) => void
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
    return (
        <>
            <div className="border rounded-lg p-12 shadow">

                <h2 className="text-xl font-bold">
                    {product.name}
                </h2>

                <p>
                    ₹{product.price}
                </p>

                <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-400 text-white px-4 py-2 rounded mt-3 hover:bg-blue-600"
                >
                    Add to Cart
                </button>

            </div>
        </>
    )
};


export default ProductCard;