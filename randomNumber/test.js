
let handler = require('./index.js').handler;

handler({
  res: {

  },
  log: (message) => {
    console.log(message);
  }
});
