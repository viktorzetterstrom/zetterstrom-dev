const config = require("./config");
const app = require("./app");

app.listen(config.port, () =>
  console.log(`SHL api listening on port ${config.port}`)
);
