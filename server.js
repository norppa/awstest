const express = require('express')
const mysql = require('mysql')
const app = express()

app.use(express.json())

var connection = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT
  });



app.get('/', (request, response) => {
    let response

    connection.connect(function(err) {
        if (err) {
          response = 'Database connection failed: ' + err.stack
          return
        }
      
        response = 'Connected to database.'
      });
    response.send(response)
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening...`))