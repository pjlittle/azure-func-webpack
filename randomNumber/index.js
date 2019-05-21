'use strict';

const random = require('lodash/random');
const msRestNodeAuth = require("@azure/ms-rest-nodeauth");
const version = require('../package.json').version;

module.exports.handler = async function (context, req) {
  const start = Date.now();
  context.log(`Called the randomNumber HTTP endpoint: ${JSON.stringify(context)}`);

  const username = process.env["AZURE_USERNAME"];
  const password = process.env["AZURE_PASSWORD"];
  await msRestNodeAuth.loginWithUsernamePasswordWithAuthResponse(username, password).then((authres) => {
    context.log(`Auth response: ${authres}`);
  }).catch((err) => {
    context.log(err);
  });

  const num = random(1, 5000);
  context.res = {
    status: 200,
    body: JSON.stringify({
      randomNumber: num,
      version: version
    })
  };

  const stop = Date.now();
  context.log(`Function took: ${stop - start}ms`);
};
