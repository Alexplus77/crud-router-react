const posts = require("../db/db");

exports.deletePost = async (req, res) => {
  try {
    req.query.id &&
      (await (posts.db = posts.db.filter(({ id }) => req.query.id !== id)));
    await res.status(200).send(posts.db);
  } catch (e) {
    await res.status(404).send({ error: e });
    console.log(e);
  }
};
