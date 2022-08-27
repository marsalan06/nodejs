// import for common module
//const simple = require("./module_second")
//import for ecma es6 .mjs extension file
// import {simple} from "./module_second.js"
// import {simple2 as simple} from "./module_second.js"
import simple3 from "./module_second.js"
import * as a2 from "./module_second.js"

simple3()

console.log(a2.simple2());