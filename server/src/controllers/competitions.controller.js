import { Competition } from "../models/competitions.model.js";
import mongoose from "mongoose";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerCompetitor = async (req, res, next) => {
  try {
    const {
      fullname,
      email,
      mob,
      competition,
      college,
      department,
      whatsappNo,
      instagramId,
      yearOfPassout,
      collegeId,
      degree,
      ieeeDayExpectation,
    } = req.body;
    const findCompetitor = await Competition.findOne({
      $and: [{ competition }, { $or: [{ mob }, { email }] }],
    });
    if (findCompetitor) {
      res.json(new ApiResponse(false, null, "Already Registered"));
    } else {
      const findUser = await Competition.findOne({
        $and: [
          {
            $or: [{ mob }, { email }],
          },
          {
            competition: { $nin: [competition] },
          },
          // {
          //     department : {$in : department}
          // }
        ],
      });
      if (findUser) {
        const update = await Competition.findByIdAndUpdate(
          {
            _id: findUser._id,
          },
          {
            $push: { competition: competition },
          },
          { new: true }
        );
        if (!update) {
          res.json(new ApiResponse(false, null, "try again"));
        } else {
          res.json(new ApiResponse(true, null, "New competition added"));
        }
      } else {
        const createCompetitor = await Competition.create({
          fullname,
          email,
          mob,
          competition,
          college,
          department,
          
          whatsappNo,
          instagramId,
          yearOfPassout,
          collegeId,
          degree,
          ieeeDayExpectation,
        });
        if (!createCompetitor) {
          res.json(new ApiResponse(false, null, "Try again"));
        } else {
          res.json(new ApiResponse(true, null, "Registered successfully"));
        }
      }
    }
  } catch (error) {
    next(error);
  }
};
const retriveCompetitorsData = async (req, res, next) => {
  try {
    const allCompetitorsInfo = await Competition.find();
    res.json(allCompetitorsInfo);
  } catch (error) {
    next(error);
  }
};

export { registerCompetitor, retriveCompetitorsData };
