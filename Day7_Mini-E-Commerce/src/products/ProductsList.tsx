import Card from "../components/Card";
import type { ProductItems } from "./product.interfaces";
import ProductCard from "./ProductCard";

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
    },
    {
        id: 4,
        name: "Mouse",
        price: 1000
    }
];


interface ProductListProps {
    addToCart : (product : ProductItems) => void
}

const ProductsList = ({addToCart} : ProductListProps) => {
    const productList: ProductItems[] = products;

    return (
        <>
            <div className="flex justify-center align-center mt-12">
                <Card>
                    {
                        productList.map((prod) => (
                            <ProductCard
                                key={prod.id} product={prod} addToCart={addToCart} ></ProductCard>
                        ))
                    }
                </Card>
            </div>

        </>
    )
};


export default ProductsList;