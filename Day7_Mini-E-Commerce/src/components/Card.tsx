import type { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {children}
            </div>
        </>
    )
};


export default Card;