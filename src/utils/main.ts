import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

const products = [
    new PhysicalProduct("P101", "Laptop", 1000, 2.5),
    new DigitalProduct("D101", "E-Book", 20, 15)
];

for (const product of products) {
    console.log(product.displayDetails());

    if (product instanceof PhysicalProduct) {
        console.log("Weight:", product.formattedWeight);
    }

    if (product instanceof DigitalProduct) {
        console.log("File Size:", product.formattedFileSize);
    }

    console.log("Final Price: $" + calculateTax(product));
    console.log("--------------------");
}