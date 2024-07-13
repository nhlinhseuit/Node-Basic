import express from 'express'
import hoemController from '../controller/homeController'

let router = express.Router()

const initWebRoute = (app) => {

    router.get('/', hoemController.getHomepage)

    router.get('/about', (req, res) => {
        res.send('LINH NODEJS')
    })

    return app.use('/', router)

}

module.exports = initWebRoute
// hoac export default initWebRoute