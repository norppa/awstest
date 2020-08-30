const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.send('Running...')
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening...`))