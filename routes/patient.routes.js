const Router = require("express");

const  registerPatient  = require("../controllers/patient.controller");

const patientRoutes = Router();

patientRoutes.post("/registration",registerPatient);

module.exports = patientRoutes;