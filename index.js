const express = require('express');
const app = express();

app.use(express.static(__dirname)); // html

const server = app.listen(process.env.PORT || 5002, () => {
    console.log('Express1 server listening on port %d in %s mode', server.address().port, app.settings.env);
  });