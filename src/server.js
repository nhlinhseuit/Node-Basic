import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
import initApiRoute from './route/api'

// import connection from './configs/connectDB'
require('dotenv').config()
var morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
    console.log(req.header)
    next()
})

app.use(morgan('combined'))

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// setup view engine
configViewEngine(app)

// init web route
initWebRoute(app)

// init api route
initApiRoute(app)

app.use((req, res) => {
    return res.render('404.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})