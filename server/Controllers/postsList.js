const posts = require("../db/db");
exports.postList = async (req, res) => {
  try {
    req.query.id
      ? await res.send(posts.db.filter(({ id }) => req.query.id === id)[0])
      : await res.send(posts.db);
  } catch (e) {
    await res.status(404).send({ error: e });
    console.log(e);
  }
};
