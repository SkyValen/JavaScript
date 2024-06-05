i = 0

function addDomain() {
    var CopiedElement = document.getElementById("copy");
    var PasteElement = CopiedElement.cloneNode(true);

    var CopiedElementInputName = PasteElement.querySelector("input")
    CopiedElementInputName.name = `domain-Name-${i}`;

    var CopiedElementSelectName = PasteElement.querySelector("select")
    CopiedElementSelectName.name = `option-${i}`;

    var CopiedElementPrice = PasteElement.querySelector("p")
    CopiedElementPrice.id = `price-${i}`;

    document.getElementById("paste").appendChild(PasteElement);
    i++
}

function eraseDomain() {
    document.querySelector('div#paste > div#copy:last-of-type').remove();
    i = i - 1
}

function saveInputs() {
    for (y = 0; y < i + 1; y++) {
        document.getElementsByName(`domain-Name-${y}`).forEach(input => {
            sessionStorage.setItem(input.name, input.value)
        })
    }
}

function loadInputs() {
    for (y = 0; y < i + 1; y++) {
        document.getElementsByName(`domain-Name-${y}`).forEach(input => {
            input.value = sessionStorage.getItem(input.name)
        })
    }
}

function priceUpdate() {
    for (y = 0; y < i + 1; y++) {
        var x = document.getElementsByName(`option-${i}`)
        if (x.value == "ee") {
            document.getElementById(`price-${i}`).innerHTML == "5.99/kuu"
        }
        else if (x.value == "eu") {
            document.getElementById(`price-${i}`).innerHTML == "4.99/kuu"
        }
        else if (x.value == "edu") {
            document.getElementById(`price-${i}`).innerHTML == "7.99/kuu"
        }
    }
}

function sendOrder() {
    let data = {
        firstName: "asdf",
        domains: ["example.com", "asd.ee"],
    }

    let y = 0
    let result = sessionStorage.getItem(`domain-Name-${y}`)
    while(result !== null) {
        data.domains.push(result)
        y++
        result = sessionStorage.getItem(`domain-Name-${y}`)
    }

    // send everything we found from storage
    fetch("http://localhost:3000/api/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));
}