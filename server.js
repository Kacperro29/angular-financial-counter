const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'transactions_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Połączono z bazą danych!');
});

app.get('/transactions', (req, res) => {
    db.query('SELECT * FROM transactions', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/transactions', (req, res) => {
    const { description, amount, type } = req.body;
    db.query(
        'INSERT INTO transactions (description, amount, type) VALUES (?, ?, ?)',
        [description, amount, type],
        (err, result) => {
            if (err) throw err;
            res.status(201).json({ id: result.insertId, ...req.body });
        }
    );
});

app.listen(4000, () => {
    console.log('Serwer działa na porcie 4000');
});
