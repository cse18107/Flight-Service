const info  = require("./info-controller");

module.exports = {
    InfoController: info,
    AirplaneController: require('./airplane-controller'),
    CityController: require('./city-controller'),
    AirportController: require('./airport-controller'),
    FlightController: require('./flight-controller')
}