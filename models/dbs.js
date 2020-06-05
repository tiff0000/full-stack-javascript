const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/ecommerceåOrders",
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
