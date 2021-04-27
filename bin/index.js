#!/usr/bin/env electron

const classes = { bm: require("../classes/bootmanager") };
const bm = new classes.bm();

require("colors");

console.log("===== Echo CLI =====".cyan, `(${__dirname.red})`);

if (process.argv[2]) {
  var args = process.argv.slice(2);
  console.log(`Launching with argument(s) :`, args);
  bm.boot(args[0]);
} else {
  throw new Error("Missing argument(s).");
}
