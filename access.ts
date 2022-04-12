import { Classdemo } from './classdemo'
export interface vehicle{
    color:string;
    engine:number;
    camera?:boolean
}


let cd = new Classdemo(123456);
cd.setUserName();
console.log(cd.getUserName());
console.log(cd.getSSN());

function validate(value:string){
console.log(value)
}
validate("hello function")

function validatecar(car:vehicle){
console.log(car.camera)
console.log(car.color)
}

let Bmw={
    color:'red',
    engine:100,
    // camera:true
}
validatecar(Bmw)
//console.log(obj.engine)