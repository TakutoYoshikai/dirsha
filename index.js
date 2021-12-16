#!/usr/bin/env node 
const crypto = require("crypto");
const fs = require("fs");


function dirsha(path) {
  const filesAndDirs = fs.readdirSync(path).filter(f => {
    return f !== ".DS_Store";
  });
  filesAndDirs.sort();
  const text = filesAndDirs.reduce((a, b) => {
    return a + "/" + b;
  }, "");
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function main() {
  let path = ".";
  if (process.argv.length >= 3) {
    path = process.argv[2];
  }
  const hash = dirsha(path);
  console.log(hash);
}

if (require.main === module) {
  main();
} else {
  module.exports = dirsha;
}
