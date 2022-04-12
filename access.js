"use strict";
exports.__esModule = true;
var classdemo_1 = require("./classdemo");
var cd = new classdemo_1.Classdemo(123456);
cd.setUserName();
console.log(cd.getUserName());
console.log(cd.getSSN());
function validate(value) {
    console.log(value);
}
validate("hello function");
function validatecar(car) {
    console.log(car.camera);
    console.log(car.color);
}
var Bmw = {
    color: 'red',
    engine: 100,
    camera: true
};
validatecar(Bmw);
//console.log(obj.engine)
