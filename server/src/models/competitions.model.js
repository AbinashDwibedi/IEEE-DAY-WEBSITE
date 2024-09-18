import {Schema , model} from "mongoose"

const competitionSchema = new Schema({
    // whatsappNo,
    // instagramId,
    // yearOfPassout,
    // collegeId,
    // degree,
    // ieeeDayExpectation,
    fullname: {
        type: String,
        required :true,
        trim : true
    },
    email : {
        type:String,
        required: true,
        unique : true,
        index:true,
    },
    mob:{
        type: String,
        required: true,
        unique : true
    },
    department : {
        type : String,
        required: true
    },
    college : {
        type  : String,
        required: true
    },
    competition:{
        type : [String],
        required :true
    },
    whatsappNo : {
        type : String,
        required: true
    },
    instagramId: {
        type : String,
        required: true
    },
    yearOfPassout: {
        type : String,
        required: true
    },
    collegeId: {
        type : String,
        required: true
    },
    degree: {
        type : String,
        required: true
    },
    ieeeDayExpectation : {
        type : String,
    }

},{timestamps: true})

export const Competition = model("Competition", competitionSchema);