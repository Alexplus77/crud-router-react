const posts = require("../db/db");

exports.postUpdate = (req, res) => {
  try {
    posts.db.map(
      (post) => req.body.id === post.id && (post.content = req.body.content)
    );

    res.status(200).send(posts.db);
  } catch (e) {
    console.log(e);
    res.status(404).send({ error: e });
  }
};
