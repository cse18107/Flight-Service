const { Sequelize } = require('sequelize');
const CrudRepository = require('./crud-repository')
const { Flight, Airplane, Airport, City } = require('../models/index')
const db = require('../models');
const { addRowLockFlights } = require('./queries');


class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight)
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
          as: "airplaneDetail"
        },
        {
            model: Airport,
            as: 'departureAirport',
            required: true,
            on: {
                col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
            },
            include: {
                model: City,
                required: true
            }
        },
        {
            model: Airport,
            as: 'arrivalAirport',
            required: true,
            on: {
                col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
            },
            include: {
                model: City,
                required: true
            }
        }
      ],
    })
    return response
  }

  async updateRemainingSeats(flightId, seats, dec = true) {
    await db.sequelize.query(addRowLockFlights(flightId));
    const flight = await Flight.findByPk(flightId);
    if(+dec) {
      await flight.decrement('totalSeates',{by: seats});
    }else {
      await flight.increment('totalSeates',{by: seats});
    }
    return flight;
  }
}

module.exports = FlightRepository
