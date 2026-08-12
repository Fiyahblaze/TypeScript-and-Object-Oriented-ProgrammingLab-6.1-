import { Product } from "./Product";

export class PhysicalProduct extends Product {
    weight: number;

    constructor(
        sku: string,
        name: string,
        price: number,
        weight: number
    ) {
        super(sku, name, price);
        this.weight = weight;
    }

    override getPriceWithTax(): number {
        return this.price * 1.10;
    }

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }
}