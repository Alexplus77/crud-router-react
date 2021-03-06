const uuid = require("uuid");
exports.db = [
  {
    id: uuid.v4(),
    content:
      "Одним из способов передачи данных в приложение представляет использование параметров строки запроса. Строка запроса (query) - фактически это часть запрошенного адреса, которая идет после знака вопроса. Например, в запросе http://localhost:3000/about?id=3&name=Tome часть id=3&name=Tome представляет строку запроса.\n" +
      "\n" +
      'Строку запроса образуют параметры. После названия каждого параметра после знака равно (=) идет его значение. Друг от друга параметры отделяются знаком амперсанда. Например, в адресе выше использовалось два параметра: параметр "id" имеет значение "3" и параметр "name" имеет значение "Tom".\n' +
      "\n" +
      "В express мы можем получить параметра строки запроса через свойство query объекта request, который передается в функцию обработки запроса.",
  },
  {
    id: uuid.v4(),
    content:
      "Middleware - это функции, имеющие доступ к объекту запроса (req), объекту ответа (res) " +
      "и к следующей функции промежуточной обработки в цикле 'запрос-ответ' приложения. " +
      "Для middleware особенно важен порядок простановки в скрипте. Следующая функция промежуточной обработки" +
      " обозначается переменной next. Функцию next необходимо вызвать для продолжения работы программы. " +
      "Middleware обычно используются для подключения функционала и работы с куками, сессиями, с парсингом POST-запросов, логированием.",
  },
  { id: uuid.v4(), content: "А это еще пост по умолчанию из базы данных." },
];
