

import { mult } from "./mult.mjs";
import { div } from "./div.mjs";
import { sum } from "./sum.mjs";
import { sub } from "./sub.mjs";
import { rootSQ } from "./rootSQ.mjs";

console.log("sum",sum(6, 7));
console.log("mult", mult(6, 7));
console.log("sub", sub(sum(6, 7), 7));
console.log("div", div(mult(6, 7), 7));
console.log("rootSQ", rootSQ(mult(14, 7)));