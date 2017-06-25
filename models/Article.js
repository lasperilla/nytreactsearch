var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  location: {
    type: String
  },
  date: {
    type: Date
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
