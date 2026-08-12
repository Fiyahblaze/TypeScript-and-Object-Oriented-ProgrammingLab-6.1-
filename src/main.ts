import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

const products = [
    new PhysicalProduct("P101", "Laptop", 1000, 2.5),
    new DigitalProduct("D101", "E-Book", 20, 15)
];

const app = document.getElementById("app");

if (app) {
    for (const product of products) {
        const productInfo = document.createElement("div");

        productInfo.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.displayDetails()}</p>
        `;

        if (product instanceof PhysicalProduct) {
            productInfo.innerHTML += `<p>Weight: ${product.formattedWeight}</p>`;
        }

        if (product instanceof DigitalProduct) {
            productInfo.innerHTML += `<p>File Size: ${product.formattedFileSize}</p>`;
        }

        productInfo.innerHTML += `
            <p>Final Price: $${calculateTax(product).toFixed(2)}</p>
            <hr>
        `;

        app.appendChild(productInfo);
    }
}