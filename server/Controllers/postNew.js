const posts = require("../db/db");
const uuid = require("uuid");
exports.postNew = (req, res) => {
  try {
    posts.db.unshift({ id: uuid.v4(), content: req.body.content });
    res.status(200).send(posts.db);
  } catch (e) {
    console.log(e);
    res.status(404).send({ error: e });
  }
};
