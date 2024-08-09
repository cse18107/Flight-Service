const { StatusCodes } = require('http-status-codes')

const { ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error')

function validationCreateRequest(req, res, next) {
    console.log(req.name)
  if (!req.body.name) {
    ErrorResponse.message = 'Something went wrong while creating airport'

    ErrorResponse.error = new AppError(
      ['Name not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.code) {
    ErrorResponse.message = 'Something went wrong while creating airport'

    ErrorResponse.error = new AppError(
      ['Code not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.cityId) {
    ErrorResponse.message = 'Something went wrong while creating airport'

    ErrorResponse.error = new AppError(
      ['City id not found in the oncoming request in the correct form'],
      StatusCodes.BAD_REQUEST,
    )
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  next()
}

module.exports = {
  validationCreateRequest,
}
