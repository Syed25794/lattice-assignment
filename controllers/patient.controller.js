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
    //Checking if hospital exist
    let hospitalId = await Hospital.find({ hospitalName: hospitalName });
    
    if (hospitalId.length) {
      hospitalId = hospitalId[0]["_id"];
    } else {
      //creating a new hospital document
      const hospital = new Hospital({
        hospitalName,
      });
      await hospital.save();
      hospitalId = await Hospital.find({ hospitalName: hospitalName });
      hospitalId = hospitalId._id;
    }

    //checking if psychiatrist exist
    let psychiatristId = await Psychiatrist.find({
      psychiatristName: psychiatristName,
    });
    if (psychiatristId.length) {
      psychiatristId = psychiatristId[0]._id;
      psychiatristId.patientCount=psychiatristId.patientCount+1;
    } else {

      //creating a new pyschiatrist document
      const psychiatrist = new Psychiatrist({
        psychiatristName,
        hospitalId:hospitalId,
        patientCount:1
      });
      await psychiatrist.save();
      psychiatristId = await Psychiatrist.find({psychiatristName:psychiatristName});
      psychiatristId=psychiatristId[0]._id;
    }
    //creating a new patient document
    const patient = new Patient({
      patientName,
      address,
      email,
      phoneNumber,
      password,
      patientPhoto,
      psychiatristId,
      hospitalId
    });
    await patient.save();
    res.status(201).send({ message: "Patient Created Successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Getting Error While Creating the Patient." });
  }
};

module.exports = registerPatient;
