const posts = require("../db/db");

exports.postUpdate = (req, res) => {
  try {
    posts.db.map(
      (post) => req.body.id === post.id && (post.content = req.body.content)
    );
    res.send({ status: "ok" });
    res.status(200);
  } catch (e) {
    console.log(e);
  }
};
