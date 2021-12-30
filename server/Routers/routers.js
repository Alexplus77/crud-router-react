const express = require("express");
const postList = require("../Controllers/postsList");
const postNew = require("../Controllers/postNew");
const postDelete = require("../Controllers/deletePost");
const postUpdate = require("../Controllers/postUpdate");
const router = express.Router();

router.get("/posts", postList.postList);
router.put("/posts", postUpdate.postUpdate);
router.delete("/posts", postDelete.deletePost);
router.post("/posts", postNew.postNew);

module.exports = router;
