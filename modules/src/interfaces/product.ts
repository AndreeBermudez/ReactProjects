export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    detail: string;
    unit: string;
    stock: number;
}

export interface CreateProduct{
    name: string;
    price: number;
    description: string;
    detail: string;
    unit: string;
    stock: number;
}