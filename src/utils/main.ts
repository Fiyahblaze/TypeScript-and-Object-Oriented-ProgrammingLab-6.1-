export class Product {
    constructor(
        public sku: string,
        public name: string,
        public price: number
    ) {}

    displayDetails(): string {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
    }

    getPriceWithTax(): number {
        return this.price;
    }
}
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
