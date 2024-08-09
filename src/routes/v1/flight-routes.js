const express = require('express');

const { FlightController } = require('../../controllers');
const {FlightMiddlewares} = require('../../middlewares')

const router = express.Router();

router.post('/',FlightMiddlewares.validationCreateRequest, FlightController.createFlight);
router.get('/', FlightController.getAllFlights);
router.get("/:id", FlightController.getFlight);

module.exports = router;