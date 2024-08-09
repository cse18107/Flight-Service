const {City} = require("../models/index");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }
}

module.exports = CityRepository;