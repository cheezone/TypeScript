//// [tests/cases/conformance/es6/templates/templateStringBinaryOperations.ts] ////

//// [templateStringBinaryOperations.ts]
var a = 1 + `${ 3 }`;
var b = 1 + `2${ 3 }`;
var c = 1 + `${ 3 }4`;
var d = 1 + `2${ 3 }4`;
var e = `${ 3 }` + 5;
var f = `2${ 3 }` + 5;
var g = `${ 3 }4` + 5;
var h = `2${ 3 }4` + 5;
var i = 1 + `${ 3 }` + 5;
var j = 1 + `2${ 3 }` + 5;
var k = 1 + `${ 3 }4` + 5;
var l = 1 + `2${ 3 }4` + 5;

var a2 = 1 + `${ 3 - 4 }`;
var b2 = 1 + `2${ 3 - 4 }`;
var c2 = 1 + `${ 3 - 4 }5`;
var d2 = 1 + `2${ 3 - 4 }5`;
var e2 = `${ 3 - 4 }` + 6;
var f2 = `2${ 3 - 4 }` + 6;
var g2 = `${ 3 - 4 }5` + 6;
var h2 = `2${ 3 - 4 }5` + 6;
var i2 = 1 + `${ 3 - 4 }` + 6;
var j2 = 1 + `2${ 3 - 4 }` + 6;
var k2 = 1 + `${ 3 - 4 }5` + 6;
var l2 = 1 + `2${ 3 - 4 }5` + 6;

var a3 = 1 + `${ 3 * 4 }`;
var b3 = 1 + `2${ 3 * 4 }`;
var c3 = 1 + `${ 3 * 4 }5`;
var d3 = 1 + `2${ 3 * 4 }5`;
var e3 = `${ 3 * 4 }` + 6;
var f3 = `2${ 3 * 4 }` + 6;
var g3 = `${ 3 * 4 }5` + 6;
var h3 = `2${ 3 * 4 }5` + 6;
var i3 = 1 + `${ 3 * 4 }` + 6;
var j3 = 1 + `2${ 3 * 4 }` + 6;
var k3 = 1 + `${ 3 * 4 }5` + 6;
var l3 = 1 + `2${ 3 * 4 }5` + 6;

var a4 = 1 + `${ 3 & 4 }`;
var b4 = 1 + `2${ 3 & 4 }`;
var c4 = 1 + `${ 3 & 4 }5`;
var d4 = 1 + `2${ 3 & 4 }5`;
var e4 = `${ 3 & 4 }` + 6;
var f4 = `2${ 3 & 4 }` + 6;
var g4 = `${ 3 & 4 }5` + 6;
var h4 = `2${ 3 & 4 }5` + 6;
var i4 = 1 + `${ 3 & 4 }` + 6;
var j4 = 1 + `2${ 3 & 4 }` + 6;
var k4 = 1 + `${ 3 & 4 }5` + 6;
var l4 = 1 + `2${ 3 & 4 }5` + 6;


//// [templateStringBinaryOperations.js]
var a = 1 + "".concat(3);
var b = 1 + "2".concat(3);
var c = 1 + "".concat(3, "4");
var d = 1 + "2".concat(3, "4");
var e = "".concat(3) + 5;
var f = "2".concat(3) + 5;
var g = "".concat(3, "4") + 5;
var h = "2".concat(3, "4") + 5;
var i = 1 + "".concat(3) + 5;
var j = 1 + "2".concat(3) + 5;
var k = 1 + "".concat(3, "4") + 5;
var l = 1 + "2".concat(3, "4") + 5;
var a2 = 1 + "".concat(3 - 4);
var b2 = 1 + "2".concat(3 - 4);
var c2 = 1 + "".concat(3 - 4, "5");
var d2 = 1 + "2".concat(3 - 4, "5");
var e2 = "".concat(3 - 4) + 6;
var f2 = "2".concat(3 - 4) + 6;
var g2 = "".concat(3 - 4, "5") + 6;
var h2 = "2".concat(3 - 4, "5") + 6;
var i2 = 1 + "".concat(3 - 4) + 6;
var j2 = 1 + "2".concat(3 - 4) + 6;
var k2 = 1 + "".concat(3 - 4, "5") + 6;
var l2 = 1 + "2".concat(3 - 4, "5") + 6;
var a3 = 1 + "".concat(3 * 4);
var b3 = 1 + "2".concat(3 * 4);
var c3 = 1 + "".concat(3 * 4, "5");
var d3 = 1 + "2".concat(3 * 4, "5");
var e3 = "".concat(3 * 4) + 6;
var f3 = "2".concat(3 * 4) + 6;
var g3 = "".concat(3 * 4, "5") + 6;
var h3 = "2".concat(3 * 4, "5") + 6;
var i3 = 1 + "".concat(3 * 4) + 6;
var j3 = 1 + "2".concat(3 * 4) + 6;
var k3 = 1 + "".concat(3 * 4, "5") + 6;
var l3 = 1 + "2".concat(3 * 4, "5") + 6;
var a4 = 1 + "".concat(3 & 4);
var b4 = 1 + "2".concat(3 & 4);
var c4 = 1 + "".concat(3 & 4, "5");
var d4 = 1 + "2".concat(3 & 4, "5");
var e4 = "".concat(3 & 4) + 6;
var f4 = "2".concat(3 & 4) + 6;
var g4 = "".concat(3 & 4, "5") + 6;
var h4 = "2".concat(3 & 4, "5") + 6;
var i4 = 1 + "".concat(3 & 4) + 6;
var j4 = 1 + "2".concat(3 & 4) + 6;
var k4 = 1 + "".concat(3 & 4, "5") + 6;
var l4 = 1 + "2".concat(3 & 4, "5") + 6;
