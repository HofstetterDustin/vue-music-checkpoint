var mongoose = require("mongoose");
console.log('Be sure to put in your connection string!')

var connectionString = "mongodb://dustin75:123test@ds012538.mlab.com:12538/musicdb123";

var connection = mongoose.connection;
mongoose.connect(connectionString);

connection.on("error", err => {
  console.error("mlab Error: ", err);
});

connection.once("open", () => {
  console.log("connected to database");
});