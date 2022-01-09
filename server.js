var express = require('express')
var jsonData = require('./constant')

var server = express()

server.use(express.json())

server.get('/city', function(request, response) {
    response.header("Content-Type", "application/json")
    response.send(JSON.stringify(jsonData))
})

server.post('/city/add', function(request, response) {
    jsonData.data.push({
        id: jsonData.data.length + 1,
        city: request.body.city,
        state: request.body.state
    })
    response.header("Content-Type", "application/json")
    response.send(JSON.stringify(jsonData))
})

server.put('/city/:id', function(request, response) {
    const id = parseInt(request.params.id)
    const index = jsonData.data.findIndex(obj => obj.id === id)

    if (index > -1) {
        const body = request.body
        jsonData.data[index] = {
            id: jsonData.data[index].id,
            city: jsonData.data[index].city,
            state: jsonData.data[index].state,
            ...body
        }
        response.header("Content-Type", "application/json")
        response.send(JSON.stringify(jsonData))
    } else {
        response.header("Content-Type", "application/json")
        response.status(404)
        response.send('No data found')
    }
    
})

server.delete('/city/:id', function(request, response) {
    const id = parseInt(request.params.id)
    const index = jsonData.data.findIndex(obj => obj.id === id)

    if (index > -1) {
        jsonData.data.splice(index, 1)
        response.header("Content-Type", "application/json")
        response.send('Record deleted successfully !!!!!')
    } else {
        response.header("Content-Type", "application/json")
        response.status(404)
        response.send('No data found')
    }
})

server.listen(9000, function() {
    console.log('Callback function started')
})