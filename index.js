const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require("path")


app.use('/static', express.static('public'))
app.use(bodyParser.urlencoded({extend:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8000, () => {
    console.log(`Example app listening on port 8000`)
  })