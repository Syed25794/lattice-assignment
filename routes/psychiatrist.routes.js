const Router = require("express");

const getAllpsychiatrists = require("../controllers/psychiatrist.controller");

const { getPsychiatristValidate } = require("../middlewares/validation");

const psychiatristRoutes = Router();

psychiatristRoutes.get("/all",getPsychiatristValidate,getAllpsychiatrists);

module.exports=psychiatristRoutes;
