// const mongoose = require("mongoose") ;
// const express = require("express") ;
const Booking = require("../../models/booking")

exports.booking = async(req,res) =>{
    try{
        const {firstname ,lastname ,email ,address , bookingDate ,sessionTime ,duration,workoutSessionType,userid} = req.body

        if(!firstname,!lastname,!email ,!address , !bookingDate ,!sessionTime ,!duration,!workoutSessionType,!userid)
        {
            return res.status(400).json({
                message : "please enter the detail"
            })
        }

        const booking = await Booking.create({
            name ,email ,address , bookingDate ,sessionTime ,duration,workoutSessionType,userid
        })

    }catch(error) {
        return res.json({
            message  : " problem in booking "
        })
    }
}