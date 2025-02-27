import { Product } from "./product";

export interface DetailSale {
    id: number;
    quantity: number;
    subtotal: number;
    product_id: number;
    sale_id: number;
    product?: Product;
}

export interface CreateDetailSale {
    quantity: number;
    subtotal: number;
    product_id: number;
}
