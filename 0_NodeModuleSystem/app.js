const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");

logger.details("yoz");
console.log(__filename);
console.log(__dirname);

pathObject = path.parse(__filename);
console.log(pathObject);
let freeMemory = os.freemem();
console.log(freeMemory);

fs.reda;
