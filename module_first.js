// const simple =require('./module_second');

// simple();

// when .mjs file made then it will work properly

// import {simple1} from "./module_second.mjs"
// simple1();

// import {simple2 as simple} from "./module_second.mjs"
// simple();

// import {simple1,simple2} from "./module_second.mjs"
// simple1();
// simple2();

// import {simple1,simple2} from "./module_second.mjs"
// simple1();
// //simple23(); will give error bc not exits in module_second.mjs


import * as a2 from "./module_second.mjs"
console.log(a2);
console.log(a2.simple1());
console.log(a2.simple2());


