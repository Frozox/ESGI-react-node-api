exports.mongoose = require("./db");
exports.HttpCode = require("./HttpCode")(exports.mongoose);
exports.Log = require('./Log')(exports.mongoose);