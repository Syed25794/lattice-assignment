const mongoose = require("mongoose");

const psychiatristSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  psychiatristName: { type: String},
  patientCount:{type: Number}
});

const Psychiatrist = mongoose.model("psychiatrist", psychiatristSchema);

module.exports = Psychiatrist;
