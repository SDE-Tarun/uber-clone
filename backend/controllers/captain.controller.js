const captainModel = require('../models/captain.model');

const captainService = require('../services/captain.service');

const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyRegistered = await captainModel.findOne( {email} );
    
    if(isCaptainAlreadyRegistered){
        return res.status(400).json({ message: 'Captain already exist' });
    }

    const captainInstance = new captainModel();

    const hashedPassword = await captainInstance.hashPassword(password);

    console.log(hashedPassword);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json( { token, captain } );


}