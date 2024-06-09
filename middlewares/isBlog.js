const BlogSetting = require("../models/blogSettingModel");

//it explains that if you have data in blogSetting then you can move to your http request otherwise you will be redirected to blog set up url.

const isBlog = async (req, res, next) => {
  try {
    const blogSetting = await BlogSetting.find({});

    if (blogSetting.length == 0 && req.originalUrl != "/blog-setup") {
      res.redirect("/blog-setup");
    } else {
      next();
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  isBlog,
};
