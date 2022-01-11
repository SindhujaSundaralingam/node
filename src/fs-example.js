var fs = require('fs')
var path = require('path')

var filePath = path.resolve(__dirname, '../res/sampleText.txt')

fs.readFile(filePath, { encoding: 'utf-8'}, (err, data) => {
    console.log('Error:', err)
    console.log('Data:', data)
})

console.log('end of the line!!!')