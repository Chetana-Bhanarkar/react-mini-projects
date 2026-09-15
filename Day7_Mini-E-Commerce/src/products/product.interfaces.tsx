export interface ProductItems {
    id : number,
    name : string,
    price : number
}


export interface CartItems extends ProductItems{
    quantity : number
}