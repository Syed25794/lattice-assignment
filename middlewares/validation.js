const validateInputsPatient = (req,res,next)=>{

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
    // Validate the input
    if(!hospitalName){
        return res.status(400).send({"error":"Hospital name is required!"});
    }
    if(!psychiatristName){
        return res.status(400).send({"error":"Psychiatrist name is required!"});
    }
    if(!patientName){
        return res.status(400).send({"error":"Patient name is required!"});
    }
    if( !address){
        return res.status(400).send({"error":"Address is required!"});
    }else if( address.length < 10  ){
        return res.status(400).send({"error":"Address should be at least 10 character long!"})
    }
    if( !phoneNumber  ){
        return res.status(400).send({"error":"Phone number is required!"});
    }else if(phoneNumber.length < 10){
        return res.status(400).send({"error":"Phone number should be 10 digit long!"});
    }
    if( !password ){
        return res.status(400).send({"error":"Password is required!"});
    }
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
        return res.status(400).send({"error":"Password should contain at least one uppercase and one lowercase and one number and at least 8 character long!"});
    }
    if( !email ){
        return res.status(400).send({"error":"Email is required!"});
    }
    if( !email.match(/^[a-zA-Z0-9._-]+@gmail\.com$/) ){
        return res.status(400).send({"error":"Invalid email domain name"});
    }
    if( !patientPhoto ){
        return res.status(400).send({"error":"Patient Photo is required!"});
    }
    next();
}

const getPsychiatristValidate=(req,res,next)=>{
    const { hospitalId }= req.body;
    console.log(hospitalId);
    if( !hospitalId ){
        return res.status(400).send({"error":"Hospital Id is required!"});
    }
    next();
}

module.exports ={ getPsychiatristValidate,validateInputsPatient};