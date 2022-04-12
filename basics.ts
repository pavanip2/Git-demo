
let c:number=4;
let list:Array<number>=[1,2,3];
let dynamic:any;
dynamic=[1,"string",0.1];
let flag:boolean=false

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);},
        100*i
    )
    
}


