const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    hospitalName: { type: String, required: true } 
});

const Hospital = mongoose.model("hospital", hospitalSchema);

module.exports = Hospital;
