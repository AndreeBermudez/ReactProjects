export interface Sale {
    id: number;
    client: string;
    date: string;
    total: number;
}

export interface CreateSale {
    date: string;
    client: string;
    total: number;
}