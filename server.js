const express = require('express')
const mysql = require('mysql')
const app = express()

app.use(express.json())

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
});

app.get('/', (request, response) => {
    var message = 'Something strange in the neighbourhood?'

    connection.connect(function (err) {
        if (err) {
            message = 'Database connection failed: ' + err.stack
            console.log(message)
            return response.send(message)
        }

        message = 'Connected to database.'
        console.log(message)
        return response.send(message)
    });

    console.log('should not get this far?')
    response.send(message)

})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening...`))