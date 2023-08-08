const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            reqquired:[true,"Please provide a user name."]
        },
        email:{
            type: String,
            reqquired:[true,"Please provide a user email address."]
        },
        password:{
            type: String,
            reqquired:[true,"Please provide a password."]
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)
