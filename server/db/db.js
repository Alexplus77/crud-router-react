const uuid = require("uuid");
exports.db = [
  { id: uuid.v4(), content: "Это пример поста." },
  { id: uuid.v4(), content: "Это другой контент." },
  { id: uuid.v4(), content: "А это еще пост по умолчанию из базы данных." },
];
