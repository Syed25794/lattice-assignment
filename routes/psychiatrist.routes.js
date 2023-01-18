const Router = require("express");

const getAllpsychiatrists = require("../controllers/psychiatrist.controller");

const psychiatristRoutes = Router();

psychiatristRoutes.get("/all",getAllpsychiatrists);

module.exports=psychiatristRoutes;
