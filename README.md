# Assignment

This assignment is a backend development project using the following technologies:

- Node.js
- Express.js
- Mongoose
- MongoDb
- dotenv

## API Endpoints

### Patient Registration

Endpoint: `http://localhost:8080/patient/registration` or `https://latticeinnovation.onrender.com/patient/registration`

Method: `POST`

Request Body: 
```json
{
    "hospitalName":"Apollo Hospitals",
    "psychiatristName":"Ahmad",
    "patientName":"hidlfjsl",
    "phoneNumber":"97947594978",
    "email":"nonrn@gmail.com",
    "address":"street no 8",
    "patientPhoto":"https://zoomg.come",
    "password":"udjfldUj98"
}

```

### Get All Psychiatrists

Endpoint: `http://localhost:8080/psychiatrist/all` or `https://latticeinnovation.onrender.com/psychiatrist/all`

Method: `GET`

Request Body: 

```json
{
    "hospitalId:"63c6c7df034812ea4cefd221"
}
```
Note: Make sure that you have all the above mentioned libraries, frameworks and module installed in your system.
