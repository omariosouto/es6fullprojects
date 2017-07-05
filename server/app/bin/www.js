#!/usr/bin/env node
import App from '../index.js'

const Server = App.listen(3000, () => {
  let host = Server.address().address;
  let port = Server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
