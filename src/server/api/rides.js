import express from "express";
import mongoose from "mongoose";
const router = express.Router();

// define the User model schema
const RidesSchema = new mongoose.Schema(
  {
    /* Trace: Number, 
  GPS_Pos: Number,
  Longitude: Number,
  Latitude: Number,
  Elevation: Number,
  T: Number,
  Thickness: Number,
  Amp: Number,
  Quality: Number,
  Comment:String,*/
  }
);
const Rides = mongoose.model("Rides", RidesSchema);

const ridesRoutes = router.get("/allTrips", function(req, res, next) {
  Rides.find({}).exec(function(err, rides) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Could not retrieve rides"
      });
    }
    res.json(rides);
  });
});

export default ridesRoutes;
