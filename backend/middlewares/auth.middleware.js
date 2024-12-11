const userModel = require('../models/user.model');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const blackListTokenModel = require('../models/blacklistToken.model')

const captainModel = require('../models/captain.model');

module.exports.authUser = async function (req,res,next) {

    // Token will always be in the cookies or headers
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isBlacklisted = await blackListTokenModel.findOne( { token: token } );

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }

    // Token decoded
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    }

}

module.exports.authCaptain = async function (req,res,next) {

    // Token will always be in the cookies or headers
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    console.log(token);
    

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isBlacklisted = await blackListTokenModel.findOne( { token: token } );

    console.log(isBlacklisted);
    
    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }

    // Token decoded
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch (error) {
        // Debugging if token generates
        console.log(error);
        return res.status(401).json({message: 'Unauthorized'});
    }

}