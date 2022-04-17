const express = require('express')

// create our Router object
const recordRouter = express.Router()

// require our controller
const recordController = require('../controllers/recordController')

recordRouter.get('/', recordController.display)

// export the router
module.exports = recordRouter