const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    hospitalId:{type:mongoose.Schema.Types.ObjectId},
    psychiatristId:{type:mongoose.Schema.Types.ObjectId},
    patientName: { type: String},
    address: { type: String},
    email: { type: String, },
    phoneNumber: { type: String},
    password: { type: String},
    patientPhoto: { type: String}
});

const Patient = mongoose.model("patient",patientSchema);

module.exports = Patient ;