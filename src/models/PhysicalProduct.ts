import { Product } from "./Product";

export class PhysicalProduct extends Product {
    constructor(
        sku: string,
        name: string,
        price: number,
        public weight: number
    ) {
        super(sku, name, price);
    }

    override getPriceWithTax(): number {
        return this.price * 1.10;
    }

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }
}