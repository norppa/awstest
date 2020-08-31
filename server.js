const express = require('express')
const mysql = require('mysql2')
const app = express()

app.use(express.json())

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD
}).promise();

app.get('/', async (request, response) => {
    const [results] = await pool.query('SELECT * FROM test')
    response.send(JSON.stringify(results))
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening...`))