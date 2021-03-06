const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
    name: { type: String, required: true },
    propellers: { type: Number, required: true },
    maxSpeed: { type: Number, required: true }
})

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;