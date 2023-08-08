const mongoose = require("mongoose")

const contactSchema = mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name:{
            type: String,
            reqquired:[true,"Please provide a contact name."]
        },
        email:{
            type: String,
            reqquired:[true,"Please provide a contact email address."]
        },
        phone:{
            type: String,
            reqquired:[true,"Please provide a phone number."]
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Contact", contactSchema)