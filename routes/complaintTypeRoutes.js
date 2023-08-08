const express = require("express")
const router = express.Router()
const {
       
      } = require("../controllers/complaintTypeController")

const validateToken = require("../middleware/validateTokenHandler")      



module.exports = router