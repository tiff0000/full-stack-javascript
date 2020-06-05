const mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true }, err => {
  if (!err) {
    console.log("MongoDB connected");
  } else {
    console.log("error: " + err);
  }
});
require("./order.model");
