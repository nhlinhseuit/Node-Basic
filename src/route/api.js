import express from 'express'
import APIController from '../controller/APIController'

let router = express.Router()

const initApiRoute = (app) => {

    router.get('/users', APIController.getAllUser) // method GET - read data

    router.post('/create-user', APIController.createNewUser)

    router.put('/update-user', APIController.updateUser)

    router.delete('/delete-user/:id', APIController.deleteUser)

    return app.use('/api/v1', router)
}

module.exports = initApiRoute
// hoac export default initApiRoute