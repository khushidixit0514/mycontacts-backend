const express = require("express")

const router = express.Router()
const {
        registerUser, 
        loginUser, 
        currenUser
      } = require("../controllers/userController")
      
const validateToken = require("../middleware/validateTokenHandler")

router.post("/register", registerUser) 
router.post("/login", loginUser) 
router.get("/current", validateToken, currenUser) 

module.exports = router

// {
//   "email" : "test@test.com",
//   "password" : "test"
// }
// {
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiVGVzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlkIjoiNjRiZTQyNTUyMTU1NGFlMDljZThlZWE0In0sImlhdCI6MTY5MDE5MDQ0NCwiZXhwIjoxNjkwMTkwNTA0fQ.tIbqy7zXcGhRU32GcaHirV4CEmlPzjD5LWhko9GDOVw"
// }
