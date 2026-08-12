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