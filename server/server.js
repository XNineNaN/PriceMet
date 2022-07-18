const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.listen(5000, () => {
  console.log("Server on 5000");
});

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Methods",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
// });
