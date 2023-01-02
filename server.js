const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname+'public')))

app.get('^/$', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/schedule', (req,res) => {
    res.sendFile(__dirname + '/public/schedule.html');
})

app.listen(8000, ()=>console.log('Listening on 8000'));

