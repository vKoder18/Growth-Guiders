const BlogSetting = require("../models/blogSettingModel");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// this function takes password and return hash password as a promise.
const securePassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  res.send("hii login here");
};

const blogSetup = async (req, res) => {
  try {
    var blogSetting = await BlogSetting.find({});

    if (blogSetting.length > 0) {
      res.redirect("/login");
    } else {
      res.render("blogSetup");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const blogSetupSave = async (req, res) => {
  try {
    const blog_title = req.body.blog_title;
    const blog_image = req.file.filenmae;
    const description = req.body.description;
    const email = req.body.email;
    const name = req.body.name;
    const password = await securePassword(req.body.password);

    const blogSetting = new BlogSetting({
      blog_title: blog_title,
      blog_logo: blog_image,
      description: description,
    });

    await blogSetting.save();

    const user = new User({
      name: name,
      email: email,
      password: password,
      is_admin: 1,
    });

    const userData = await user.save();
    if (userData) {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  login,
  blogSetup,
  blogSetupSave,
};
