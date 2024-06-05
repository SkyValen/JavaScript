i = 0
z = 0
function addDomain() {
    store();
    document.getElementById("copy").innerHTML +=
        `<div class="DomainReg">
        <div class="input-group">
            <span class="input-group-text">https://</span>
            <input type="text" class="form-control" placeholder="Domeeni nimi" name="domain-Name-${i}">
            <select class="form-select" onchange="anotherDomainPrice()" name="option" id = "option${i}">
                <option value="ee">ee</option>
                <option value="eu">eu</option>
                <option value="org">org</option>
                <option value="edu">edu</option>
            </select>
        </div>
    </div>
    <p id="priceOption-${i}"></p>`;

    restore();
    i++
}

function domainPrice() {
    document.getElementsByName("option").forEach(option => {
        for (y = 0; y < i; y++) {
            x = option.value
            if (x == "ee") {
                document.getElementById(`priceOption-${y}`).innerHTML = "5.99€/kuu"
            }
            else if (x == "eu") {
                document.getElementById(`priceOption-${y}`).innerHTML = "6.99€/kuu"
            }
            else if (x == "org") {
                document.getElementById(`priceOption-${y}`).innerHTML = "7.99€/kuu"
            }
            else if (x == "edu") {
                document.getElementById(`priceOption-${y}`).innerHTML = "4.99€/kuu"
            }
        }
    })
}

function anotherDomainPrice() {
    document.getElementsByName("option").forEach(anotherOption => {
        for (asd = 0; asd < i; asd++) {
            brick = document.getElementById(`option${asd}`).value
            newprice = 0
            if (brick == "ee") {
                newprice = 5.99
            }
            else if (brick == "eu") {
                newprice = 6.99
            }
            else if (brick == "org") {
                newprice = 7.99
            }
            else if (brick == "edu") {
                newprice = 4.99
            }
            document.getElementById(`priceOption-${asd}`).innerHTML = `${newprice}€/kuu`
        }
    })
}

function store() {
    console.log("start saving")
    document.querySelectorAll("input").forEach((input) => {
        console.log("saved item ", input.name)
        sessionStorage.setItem(input.name, input.value)
    })
}

function restore() {
    document.querySelectorAll("input").forEach((input) => {
        input.value = sessionStorage.getItem(input.name)
    })
}

addDomain();
domainPrice();
anotherDomainPrice();