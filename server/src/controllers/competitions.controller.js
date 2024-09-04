import { Competition } from "../models/competitions.model.js";
import mongoose from "mongoose";
import {ApiResponse} from "../utils/ApiResponse.js"

const registerCompetitor = async(req, res, next)=>{
    try {
        const {fullname , email , mob ,competition , college , department} = req.body;
        const findCompetitor = await Competition.findOne({
            $or :[
                {mob},
                {email}
            ]
        });
        if(findCompetitor){
            res.json(new ApiResponse(
                false,
                null,
                "User Already exists"
            ))
        }
        else{
            const createCompetitor = await Competition.create({
                fullname,
                email,
                mob,
                competition,
                college,
                department
            })
            if(!createCompetitor){
                res.json(new ApiResponse(
                    false,
                    null,
                    "Try again"
                ))
            }
            else{
                res.json(new ApiResponse(
                    true,
                    null,
                    "Registered successfully"
                ))
            }
        }
        
    } catch (error) {
        next(error)
    }
}
const retriveCompetitorsData = async (req, res, next)=>{
    try {
        const allCompetitorsInfo = await Competition.find();
        res.json(allCompetitorsInfo)
    } catch (error) {
        next(error)
    }
}

export {registerCompetitor , retriveCompetitorsData}