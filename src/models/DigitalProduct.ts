import { Product } from "./Product";

export class DigitalProduct extends Product {
    constructor(
        sku: string,
        name: string,
        price: number,
        public fileSize: number
    ) {
        super(sku, name, price);
    }

    override getPriceWithTax(): number {
        return this.price;
    }

    get formattedFileSize(): string {
        return `${this.fileSize} MB`;
    }
}