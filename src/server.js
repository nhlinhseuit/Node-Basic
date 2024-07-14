import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
import initApiRoute from './route/api'

// import connection from './configs/connectDB'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// setup view engine
configViewEngine(app)

// init web route
initWebRoute(app)

// init api route
initApiRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})