const mongoose = require("mongoose")

const complaintTypeSchema = mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "complaintType",
        },
        name:{
            type: String,
            reqquired:[true,"Please provide the type of your complaint."]
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("complaintType", complaintTypeSchema)