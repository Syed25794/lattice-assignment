const mongoose = require("mongoose");

const psychiatristSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  psychiatristName: { type: String, required: true },
  patientCount:{type: Number, required:true}
});

const Psychiatrist = mongoose.model("psychiatrist", psychiatristSchema);

module.exports = Psychiatrist;
