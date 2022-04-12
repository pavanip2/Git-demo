import { vehicle } from "./access";
export class Classdemo{
    username:string;
    password:string;
    ssn:number;
    constructor(ssn:number){
       this.ssn=ssn;
    }
    getUserName(){
        return this.username;
    }
    setUserName(){
        this.username="hello";
    }
    getSSN(){
        return this.ssn;
    }
}
    // let cd=new Classdemo(123456);
    // cd.setUserName();
    // console.log(cd.getUserName());
    // console.log(cd.getSSN());
