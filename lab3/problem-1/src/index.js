"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const button = document.querySelector("button");
(0, rxjs_1.fromEvent)(button, 'click').subscribe(() => console.log("clicked"));
