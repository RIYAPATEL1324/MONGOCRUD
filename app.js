const express = require ('express')
const app = express()
const port = 4000

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendfile(__dirname+'/home.html')
})
app.get('/cake', (req, res) => {
    res.send('Hello World!')
})
app.get('/cake/surat', (req, res) => {
    res.send('Hello surat vasiyo!')
})
app.get('/cake/rajkot', (req, res) => {
    res.send('Hello rakjot person')
})
app.get('*', (req, res) => {
    res.send('404')
})
app.listen (port, () => {
console. log(`Example app listening on port ${port}*`)
})