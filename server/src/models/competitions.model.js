import {Schema , model} from "mongoose"

const competitionSchema = new Schema({
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
        type : String,
        required :true
    }
},{timestamps: true})

export const Competition = model("Competition", competitionSchema);