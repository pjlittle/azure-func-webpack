'use strict';

import _ from "lodash";
// const ArmResource = require('azure-arm-resource');

module.exports.handler = async function (context, req) {
  let start = Date.UTC();
  context.log(`Called the randomNumber HTTP endpoint: ${JSON.stringify(context)}`);

    let num = _.random(1, 5000);
    context.res = {
      status: 200,
      body: JSON.stringify({
        randomNumber: num
      })
    };

    let stop = Date.UTC();
    context.log(`Function took: ${stop - start}ms`);
};
