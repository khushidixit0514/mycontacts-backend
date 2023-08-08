const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
const jwt =require("jsonwebtoken")

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
    const {username, email, password} =req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("username, email, password are required!")
    }
    const userAvailable = await User.findOne({ email })
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered!")
    }
    // Hashed password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed Password: ", hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400)
        throw new Error("User data is invalid!")
    }
})

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("email, password are required!")
    }
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
            {
              user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" },
      )
      console.log({accessToken})
      res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("Email or Password invalid!")
    }
})

//@desc Current user
//@route GET /api/users/current
//@access private
const currenUser = asyncHandler( async (req, res) => {
    res.json(req.user)
})

module.exports = {registerUser, loginUser, currenUser}
