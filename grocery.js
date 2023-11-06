var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var groceries = [
    new Grocery("Milk", 3, 4.99),
    new Grocery("Eggs", 6, 2.09),
    new Grocery("Bread", 8, 2.99),
    new Grocery("Ham", 1, 5.99),
    new Grocery("Cheese", 4, 3.99),
];
var table = document.getElementById('grocery');
groceries.map(function (grocery) {
    var name = grocery.name, quantity = grocery.quantity, price = grocery.price;
    var row = table.insertRow();
    row.innerHTML = "\n        <td id = \"name\">".concat(name, "</td>\n        <td id = \"quantity\">").concat(quantity, "</td>\n        <td id = \"price\">").concat(price, "</td>");
});
