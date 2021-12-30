const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routers = require("./Routers/routers");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routers);

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
