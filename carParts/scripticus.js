var fs = require('fs')
const { send } = require('process')

var content = fs.readFileSync('LE.txt', { encoding: "utf8" })
//var step1 = content.toString(); TODO read about encoding and binary data
var line = content.split('\n')

const parts = []
const found = []

function database() {
    for (i = 0; i < line.length; i++) {
        var string = line[`${i}`]
        var confirm = string.split("\t")
        var confirm1 = []
        for (y = 0; y < 11; y++) {
            var blabla = confirm[y].split('"') // .substring(1, -1)
            confirm1.push(blabla[1])
        }
        var part = {
            id: confirm1[0],
            name: confirm1[1],
            amount1: confirm1[2],
            amount2: confirm1[3],
            amount3: confirm1[4],
            amount4: confirm1[5],
            amount5: confirm1[6],
            price: confirm1[8],
            keyword: confirm1[9],
            totalAmount: confirm1[10]
        }
        parts.push(part)
    }

    var text = "BMW"
    for (i = 0; i < parts.length; i++) {
        if (parts[i].name.startsWith(text)) {
            found.push(parts[i])
        }
    }
    sending()
}database();


function sending() {
    let data = []
    for (let i = 0; i < found.length; i++) {
        data.push(found[i]);
    }

    // send everything we found from storage
    fetch("http://localhost:3000/api/searching", {
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
// parts.filter(part => part.keyword.startsWith(text))