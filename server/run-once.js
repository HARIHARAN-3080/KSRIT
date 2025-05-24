const mongoose = require("mongoose");
const Admin = require("./models/Admin");

mongoose.connect("mongodb://127.0.0.1:27017/ksrit-conference", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createAdmin = async () => {
  const existing = await Admin.findOne({ username: "admin" });
  if (!existing) {
    await Admin.create({ username: "admin", password: "123456" }); // Change to secure password later
    console.log("Admin created");
  } else {
    console.log("Admin already exists");
  }
  mongoose.disconnect();
};

createAdmin();
