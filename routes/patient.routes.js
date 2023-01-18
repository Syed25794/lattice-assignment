const Router = require("express");

const  registerPatient  = require("../controllers/patient.controller");

const { validateInputsPatient } = require("../middlewares/validation");

const patientRoutes = Router();

patientRoutes.post("/registration",validateInputsPatient,registerPatient);

module.exports = patientRoutes;