//main.js
import { module, area } from "./module.js"; //import *as md from "./module.js"; //참조변수
import sq, { circle } from "./module1.js";
module("test");
//md.module("test");
area(10, 20);
//md.area(10, 20);
sq();
circle();
