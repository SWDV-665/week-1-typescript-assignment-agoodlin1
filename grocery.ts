class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

const groceries = [
new Grocery("Milk", 3, 4.99),
new Grocery("Eggs", 6, 2.09),
new Grocery("Bread", 8, 2.99),
new Grocery("Ham", 1, 5.99),
new Grocery("Cheese", 4, 3.99),
];

const table = document.getElementById('grocery') as HTMLTableElement;

groceries.map(grocery => {
    const {name, quantity, price} = grocery;
    const row = table.insertRow()
    row.innerHTML = `
        <td id = "name">${name}</td>
        <td id = "quantity">${quantity}</td>
        <td id = "price">${price}</td>`;
});
