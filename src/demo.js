//this shims es6 into our nodejs environment
require("babel/register")({
  stage: 1
});

var goodies = require("./index");
var _ = require('lodash');

//start our own repl
var repl = require("repl");

console.log("Injected variables for your amusement:")
_.each(goodies, function(val, key) {
  console.log("\t"+key);
});

var prompt = repl.start({
  prompt: "node> ",
  input: process.stdin,
  output: process.stdout,
  useGlobal: true
});

_.merge(prompt.context, goodies);
