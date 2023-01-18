const Router = require("express");

const getAllpsychiatrists = require("../controllers/psychiatrist.controller");

const { getPsychiatristValidate } = require("../middlewares/validation");

const psychiatristRoutes = Router();

//to get all psychiatrists and hospital patient count etc route
psychiatristRoutes.get("/all",getPsychiatristValidate,getAllpsychiatrists);

module.exports=psychiatristRoutes;
