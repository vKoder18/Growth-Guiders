//write two lines before creating any route

const express = require("express");
const admin_route = express();

//since we have to take data from a file so body-parser will convert it in json format.
const bodyParser = require("body-parser");
admin_route.use(bodyParser.json());
admin_route.use(bodyParser.urlencoded({ extended: true }));

admin_route.set("view engine", "ejs");
admin_route.set("views", "./views");

//for uploading images
const multer = require("multer");
//dynamic path
const path = require("path");
//making public folder static
admin_route.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

const adminController = require("../controllers/adminController");

admin_route.get("/login", adminController.login);
admin_route.get("/blog-setup", adminController.blogSetup);
admin_route.post(
  "/blog-setup",
  upload.single("blog-image"),
  adminController.blogSetupSave
);

module.exports = admin_route;

//body parser installed to take data from the form
