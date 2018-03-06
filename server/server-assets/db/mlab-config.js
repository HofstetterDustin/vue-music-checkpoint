var mongoose = require("mongoose");
console.log("mongoose is a really big snake")

var connectionString = "mongodb://dustin75:123test@ds012538.mlab.com:12538/musicdb123"

var connection = mongoose.connection
mongoose.connect(connectionString)

connection.on("error", err => {
  console.error("mlab Error: ", err)
})

connection.once("open", () => {
  console.log("connected to mlab");
});