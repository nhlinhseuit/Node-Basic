import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

const initWebRoute = (app) => {

    router.get('/', homeController.getHomepage)

    router.post('/create-new-user', homeController.createNewUser)

    router.get('/detail/user/:id', homeController.getDetailPage)

    router.get('/about', (req, res) => {
        res.send('LINH NODEJS')
    })

    return app.use('/', router)

}

module.exports = initWebRoute
// hoac export default initWebRoute