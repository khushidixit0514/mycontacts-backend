// console.log("Welcome to My Contacts Project!")
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
// const validateToken = require("./middleware/validateTokenHandler");
const connectDB = require("./config/dbConnection");
const validateTokenHandler = require("./middleware/validateTokenHandler");
const dotenv = require("dotenv").config()

connectDB()

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json()) // to convert body json data into json data
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
