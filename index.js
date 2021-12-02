#!/usr/bin/env node 
const crypto = require("crypto");
const fs = require("fs");


function dirsha(path) {
  const text = fs.readdirSync(path).reduce((a, b) => {
    return a + "/" + b;
  });
  console.log(text);
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function main() {
  const path = process.argv[2];
  const hash = dirsha(path);
  console.log(hash);
}

if (require.main === module) {
  main();
} else {
  module.exports = dirsha;
}
