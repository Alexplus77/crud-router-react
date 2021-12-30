const posts = require("../db/db");
exports.postList = (req, res) => {
  try {
    req.query.id
      ? res.send(posts.db.filter(({ id }) => req.query.id === id)[0])
      : res.send(posts.db);
  } catch (e) {
    console.log(e);
  }
};
