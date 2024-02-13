"use strict";
const hoge = '';
const fuga = hoge;
console.log(fuga);
const hoge2 = 2;
const fuga2 = hoge;
console.log(fuga2);
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
const c1 = Color.Red;
const obj = {
    name: 'Sato',
    age: 32,
    subject: 'Tokyo',
};
console.log(obj.length);
//# sourceMappingURL=index.js.map