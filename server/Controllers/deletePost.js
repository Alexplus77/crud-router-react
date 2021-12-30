const posts = require("../db/db");

exports.deletePost = (req, res) => {
  try {
    req.query.id &&
      (posts.db = posts.db.filter(({ id }) => req.query.id !== id));
    res.status(200);
  } catch (e) {
    console.log(e);
  }
};
