const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blogms");

const express = require("express");
const app = express();

// app. listen() method is used to start a web server and listen to the connections on the specified host and port. This method is invoked on an instance of an Express application (app) created using express()

// What is the difference between app get and app listen?
// listen() just sets up a server for the app to run on so that you can view it using localhost:[port]. app. get() sets up routes which the app uses to view different sections by sending GET requests to the server

// app.get("/", function (req, res) {
//   res.send("hii");
// });

const isBlog = require("./middlewares/isBlog");
app.use(isBlog.isBlog);

//for admin routes
const adminRoute = require("./routes/adminRoute");
app.use("/", adminRoute);

// The app.use() function is used to mount the specified middleware function(s) at the path that is being specified. It is mostly used to set up middleware for your application.
// Syntax:
// app.use(path, callback)

app.listen(3000, function () {
  console.log("Server is running");
});
