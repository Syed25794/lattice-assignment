const mongoose = require("mongoose");

//hospital schema
const hospitalSchema = new mongoose.Schema({
    hospitalName: { type: String} 
});

//hospital model
const Hospital = mongoose.model("hospital", hospitalSchema);

module.exports = Hospital;
