const mongoose = require("mongoose");

const URI = "mongodb+srv://santialvarez0207:FinanceGenius2024@financegenius.zia3ipn.mongodb.net/";

mongoose.Promise = global.Promise
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(db + "db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;