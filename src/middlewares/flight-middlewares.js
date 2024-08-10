const { StatusCodes } = require('http-status-codes')

const { ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error')
const { compareTime } = require('../utils/helpers/datetime-helpers')

function validationCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      ['FlightNumber not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      ['AirplaneId not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      [
        'DepartureAirportId not found in the oncoming request in the correct form',
      ],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      [
        'ArrivalAirportId not found in the oncoming request in the correct form',
      ],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      ['ArrivalTime not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      ['DepartureTime not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.price) {
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      ['Price not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }

  if (!req.body.totalSeates) {
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      ['TotalSeates not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if(!compareTime(req.body.arrivalTime, req.body.departureTime)){
    ErrorResponse.message = 'Something went wrong while creating flight'

    ErrorResponse.error = new AppError(
      ['Arrival time should be greater then departure time'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  next()
}

function validateUpdateSeatsRequest(req, res, next) {
  if (!req.body.seats) {
    ErrorResponse.message = 'Something went wrong while updating flight'

    ErrorResponse.error = new AppError(
      ['Seats not found in the incoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  next();
}

module.exports = {
  validationCreateRequest,
  validateUpdateSeatsRequest
}
