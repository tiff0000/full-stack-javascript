const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tiff000:tiff000@cluster0-syk1l.mongodb.net/onlineCourseShop?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("MongoDB connected");
    } else {
      console.log("error: " + err);
    }
  }
);
require("./order.model");
