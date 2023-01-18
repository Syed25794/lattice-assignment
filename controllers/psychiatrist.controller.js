const Hospital = require("../models/hospital.models");
const Psychiatrist = require("../models/psychiatrist.models");
const Patient = require("../models/patient.model");

const getAllpsychiatrists=async(req,res)=>{
    const {hospitalId}=req.body;
    console.log(hospitalId);
    try {
        const hospitalDetails= await Hospital.find({_id:hospitalId});
        // console.log(hospitalDetails,"hospital details");
        const psychiatristDetails = await Psychiatrist.find({hospitalId});
        // console.log(psychiatristDetails, "psych details");
        const patientDetails = await Patient.find({hospitalId});
        // console.log(patientDetails,"patientDetails");
        let totalPatients=0;
        psychiatristDetails.map((psychiatrist)=>(
            totalPatients+=psychiatrist.patientCount
        ));
        const response = {
            hospitalName:hospitalDetails[0].hospitalName,
            psychiatristCount:psychiatristDetails.length,
            patientCount:totalPatients,
            psychiatristDetails:psychiatristDetails.map(psychiatrist => {
                return {
                    id: psychiatrist._id,
                    name: psychiatrist.psychiatristName,
                    patientsCount: psychiatrist.patientCount
                }
          })
        };
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Error while fetching hospital or psychiatrist or patient details."});
    }
    
}

module.exports=getAllpsychiatrists;