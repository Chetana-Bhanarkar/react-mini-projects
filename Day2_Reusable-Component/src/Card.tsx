import type { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <>
            <div className="col-span-4 card border rounded border-gray-900 m-5 bg-gray-300 p-5">
                {children}
            </div>
        </>
    )
};


export default Card;