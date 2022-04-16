const exphbs = require('express-handlebars')

// Import express
const express = require('express')
// Set your app up as an express app
const app = express()

// configure Handlebars
app.engine(
    'hbs',
    exphbs.engine({
        defaultlayout: 'main',
        extname: 'hbs',
    })
)
// set Handlebars view engine
app.set('view engine', 'hbs')

app.use(express.static('public'))

// Set up to handle POST requests
app.use(express.json()) // needed if POST data is in JSON format
app.use(express.urlencoded({ extended: false })) // only needed for URL-encoded input

// link to our router
const submitRouter = require('./routes/submitRouter')

// middleware to log a message each time a request arrives at the server - handy for debugging
//app.use((req,res,next) => {
  //  console.log('message arrived: ' + req.method + ' ' + req.path + ' ' + req.body.number)
    //next()
//})

// the demo routes are added to the end of the '/people' path
app.use('/submission', submitRouter)

// Tells the app to send the string: "Our demo app is working!" when you hit the '/' endpoint.
app.get('/', (req, res) => {
    res.render('index.hbs')
})

// Tells the app to listen on port 3000 and logs that information to the console.
app.listen(3000, () => {
    console.log('Demo app is listening on port 3000!')
})
