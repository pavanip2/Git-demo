"use strict";
exports.__esModule = true;
exports.Classdemo = void 0;
var Classdemo = /** @class */ (function () {
    function Classdemo(ssn) {
        this.ssn = ssn;
    }
    Classdemo.prototype.getUserName = function () {
        return this.username;
    };
    Classdemo.prototype.setUserName = function () {
        this.username = "hello";
    };
    Classdemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return Classdemo;
}());
exports.Classdemo = Classdemo;
// let cd=new Classdemo(123456);
// cd.setUserName();
// console.log(cd.getUserName());
// console.log(cd.getSSN());
