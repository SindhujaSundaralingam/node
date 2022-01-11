var express = require('express')
var jsonData = require('./cityDataList')

var server = express()

server.use(express.json())

function responseCb(res, data) {
    res.header("Content-Type", "application/json"),
    res.send(data)
}

function notFoundCb(res) {
    res.header("Content-Type", "application/json")
    res.status(404)
    res.send('No data found')
}

server.get('/city', function(request, response) {
    responseCb(response, JSON.stringify(jsonData))
})

server.post('/city/add', function(request, response) {
    jsonData.data.push({
        id: jsonData.data.length + 1,
        city: request.body.city,
        state: request.body.state
    })
    responseCb(response, JSON.stringify(jsonData))
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
        responseCb(response, JSON.stringify(jsonData))
    } else {
        notFoundCb(response)
    }
    
})

server.delete('/city/:id', function(request, response) {
    const id = parseInt(request.params.id)
    const index = jsonData.data.findIndex(obj => obj.id === id)

    if (index > -1) {
        jsonData.data.splice(index, 1)
        responseCb(response, 'Record deleted successfully !!!!!')
    } else {
        notFoundCb(response)
    }
})

server.listen(9000, function() {
    console.log('Listening to port 9000')
})