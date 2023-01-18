const mongoose = require("mongoose");

//psychiatrist Schema
const psychiatristSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  psychiatristName: { type: String},
  patientCount:{type: Number}
});

//psychiatrist model
const Psychiatrist = mongoose.model("psychiatrist", psychiatristSchema);

module.exports = Psychiatrist;
