const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs')

const app = express();
app.use(cors())
app.use(bodyParser.json({ limit: '50mb'}));

// POST-метод для обработки данных
app.post('/api/searching', (req, res) => {
    const data = req.body;
    console.log(data)
    fs.appendFileSync("data_from_client.json", JSON.stringify(data))
    // Обработка данных и отправка ответа
    res.json({ message: 'Данные успешно получены', data });
});

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            res.setHeader('Content-Type', 'text/html')
        }
    });
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
    console.log('Сервер запущен на порту http://localhost:3000/');
});