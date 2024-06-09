// The importance of a database schema lies in its ability to outline the logical layout of a database and keep data organized

const mongoose = require("mongoose");

const blogSettingSchema = mongoose.Schema({
  blog_title: {
    type: String,
    required: true,
  },
  blog_logo: {
    type: String,
    requires: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// mongoose.model(<Collectionname>, <CollectionSchema>)
// Parameters: This function accepts the following two parameters:

// Collection name: It is the name of the collection.
// Collection Schema: It is the schema of the collection.
// Return type: This function returns the Mongoose object.

module.exports = mongoose.model("BlogSetting", blogSettingSchema);
