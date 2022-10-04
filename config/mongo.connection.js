const mongoose = require("mongoose");
const con = mongoose.createConnection("mongodb://localhost:27017/adda-khana");
module.exports = con;
