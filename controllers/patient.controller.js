const Hospital = require("../models/hospital.models");
const Psychiatrist = require("../models/psychiatrist.models");
const Patient = require("../models/patient.model");

const registerPatient = async (req, res) => {
  const {
    hospitalName,
    psychiatristName,
    patientName,
    address,
    email,
    password,
    patientPhoto,
    phoneNumber,
  } = req.body;
  try {
    let hospitalId = await Hospital.find({ hospitalName: hospitalName });
    console.log(hospitalId,"hospitalId");
    if (hospitalId.length) {
      hospitalId = hospitalId[0]["_id"];
      console.log(hospitalId,"if hospiId");
    } else {
      const hospital = new Hospital({
        hospitalName,
      });
      await hospital.save();
      hospitalId = await Hospital.find({ hospitalName: hospitalName });
      hospitalId = hospitalId._id;
      console.log(hospitalId,"hospital under else");
    }
    let psychiatristId = await Psychiatrist.find({
      psychiatristName: psychiatristName,
    });
    console.log(psychiatristId,"psycid ");
    if (psychiatristId.length) {
      psychiatristId = psychiatristId[0]._id;
      console.log(psychiatristId,"if psyc");
    } else {
      const psychiatrist = new Psychiatrist({
        psychiatristName,
        hospitalId:hospitalId
      });
      await psychiatrist.save();
      psychiatristId = await Psychiatrist.find({psychiatristName:psychiatristName});
      psychiatristId=psychiatristId[0]._id;
      console.log(psychiatristId,"else pscy");
    }
    const patient = new Patient({
      patientName,
      address,
      email,
      phoneNumber,
      password,
      patientPhoto,
      psychiatristId
    });
    console.log(patient);
    await patient.save();
    res.status(201).send({ message: "Patient Created Successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Getting Error While Creating the Patient." });
  }
};

module.exports = registerPatient;
