require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')
​
const app = express()
​
app.use(express.json())
app.use(cors())
​
// ENDPOINTS
app.get('/api/memes/:id', ctrl.getMeme)
app.get('/api/memes', ctrl.getAllMemes)
app.post('/api/memes', ctrl.addMeme)
app.put('/api/memes/:id', ctrl.updateMeme)
app.delete('/api/memes/:id', ctrl.deleteMeme)
​
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
})