// Adding References of linqjs
const rlinq = require('linq');

// Declaring a array of product
var products = [
    { "id": 100, "name": "Pendrive", "price": 500 },
    { "id": 101, "name": "Ram", "price": 1000 },
    { "id": 102, "name": "Motherboard", "price": 5000 },
    { "id": 103, "name": "Keyboard", "price": 450 }
]

SumArray();
MinArray();
MaxArray();
AverageArray();
SelectFromArray();

function SumArray() {
    // sum function will return the sumation of all products price
    var totalprice = rlinq.from(products).sum("$.price");
}

function MinArray() {
    // min function will return the minimum price of all products
    var minimumprice = rlinq.from(products).min("$.price");
}

function MaxArray() {
    // max function will return the maximum price of all products
    var maximumprice = rlinq.from(products).max("$.price");
}

function AverageArray() {
    // average function will return the average price of all products
    var averageprice = rlinq.from(products).average("$.price");
}

function SelectFromArray() {
    // select function will return all products name
    var productName = rlinq.from(products).select("$.name").toArray();
}