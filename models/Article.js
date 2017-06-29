var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline: {
    type: String
  },
  url: {
    type: String
  },
  article_id: {
  	type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
