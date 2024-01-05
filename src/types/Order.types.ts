export interface IOrder {
    id: number;
    number: number;
    info: string;
    delivery: string;
}

export interface IOrderProps {
    data: IOrder[];
}

