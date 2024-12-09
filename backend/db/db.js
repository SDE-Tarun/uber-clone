const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Successfully connected to the uber clone database');
        })
        .catch((err) => {
            console.error('Error while connecting to the uber clone database:', err.message);
            // process.exit(1);  // Optional: Exit the process if DB connection fails
        });
}

module.exports = connectToDb;