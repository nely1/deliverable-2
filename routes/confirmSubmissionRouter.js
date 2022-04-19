const express = require('express')

// create our Router object
const confirmSubmissionRouter = express.Router()

// require our controller
const confirmSubmissionController = require('../controllers/confirmSubmissionController')

confirmSubmissionRouter.post('/', confirmSubmissionController.display)


// export the router
module.exports = confirmSubmissionRouter