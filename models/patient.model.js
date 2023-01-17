const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    psychiatristId:{type:mongoose.Schema.Types.ObjectId, required:true},
    patientName: { type: String, required: true},
    address: { type: String, required: true , minLength: 10},
    email: { type: String, required: true},
    phoneNumber: { type: String, required: true,minLength:11},
    password: { type: String, required: true,minLength:8, maxLength:15},
    patientPhoto: { type: String, required: true}
});

const Patient = mongoose.model("patient",patientSchema);

module.exports = Patient ;