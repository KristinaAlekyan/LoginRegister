const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;

db.user = require("./userModel.js");
db.role = require("./roleModel.js");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;