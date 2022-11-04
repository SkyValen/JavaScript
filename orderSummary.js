
var tellimus = {
    "id": 2113,
    "orderNumber": "E210126001",
    "createdAt": "2021-01-26 16:04:24",
    "clientName": "Kalle Tali",
    "deliveryType": "Omniva smartpost",
    "deliveryValue": 178,
    "rows": [
        {
            "article_id": 31,
            "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W",
            "product_code": "257549",
            "price": 49.1666666667,
            "amount": 1,
            "vat": 0.2
        },
        {
            "article_id": 23420,
            "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk",
            "product_code": "355836",
            "price": 5.0666666667,
            "amount": 2,
            "vat": 0.2
        },
        {
            "article_id": 23421,
            "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk",
            "product_code": "000000000501267301",
            "price": 5.825,
            "amount": 1,
            "vat": 0.2
        }
    ]
}

totalSum = 0

for (i = 0; i < tellimus.rows.length; i++) {
    console.log(i)
    // TODO try to understand that later
    //let product = tellimus["rows"][i]
    //let {name, price, amount, vat} = product // its called deconstructor

    let name = tellimus["rows"][i]["name"]
    let price = tellimus["rows"][i]["price"]
    let amount = tellimus["rows"][i]["amount"]
    let vat = tellimus["rows"][i]["vat"]
    var percent = vat * (price * amount) 
    let sum = price * amount + percent
    totalSum += sum
    console.log(name + "  " + price.toFixed(2) + "$  " + amount + " tk  " + sum.toFixed(2) + "$  ")
}

console.log(totalSum)
