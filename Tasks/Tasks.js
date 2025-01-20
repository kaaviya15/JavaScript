
/*task 36-40*/
var a=5;
if(a%2==0){
    document.getElementById("task36").innerHTML="a is even";
}
else{
    document.getElementById("task36").innerHTML="a is odd";
}

let b=0;
if(b==0){
    document.getElementById("task37").innerHTML="b value is zero";
}
if(b>0){
    document.getElementById("task37").innerHTML="b value is positive number";
}
if(b<0){
    document.getElementById("task37").innerHTML="b value is negative number";
}

var a=-12;
document.getElementById("task38").innerHTML=a==0?"a is zero":a>0?"a is positive number":a<0?"a is negative number":"none";

var score=90;
document.getElementById("task40").innerHTML="student A: "+(score>50?"pass":"fail");

/*task 41-45*/
function logicalOperator(){
    console.log("true && true is "+(true && true));
    console.log("true && false is "+(true && false));
    console.log("false && true is "+(false && true));
    console.log("false && false is "+(false && false));
    console.log("true || true is "+(true || true));
    console.log("true || false is "+(true || false));
    console.log("false || true is "+(false || true));
    console.log("false || false is "+(false || false));
    console.log("!true is"+(!true));
    console.log("!false is"+(!false));
    

}
document.getElementById("task41").innerHTML="In Console "+logicalOperator();


let x=10;
document.getElementById("task42").innerHTML=x>5 && x<=10?`${x} is within range 5 to 10`:`${x} is not within range 5 to 10`;

/*task 46-50*/
function addition(a,b){
    return "Addition "+(a+b);
}
document.getElementById("task46").innerHTML=addition(3,145);

function area(l,b){
    return "Area "+l*b;
}
document.getElementById("task47").innerHTML=area(12,12);

function withoutParameter(){
    return "This function is without Parameter";
}
document.getElementById("task48").innerHTML=withoutParameter();

function defaultReturn(){
    return;
}
document.getElementById("task49").innerHTML="Default Return Value "+defaultReturn();

function defaultParameter(a=7,b=5){
    return "Divide "+Math.ceil(a/b);
}
document.getElementById("task50i").innerHTML="without argument "+defaultParameter();
document.getElementById("task50ii").innerHTML="with argument "+defaultParameter(5,5);


/*task 50-55*/


let func=(name)=>{
    return `Hello,${name}`;
}
document.getElementById("task51").innerHTML=func("Kaaviya");
console.log(func("lohi"));

let add=(a,b)=>{
    return `Addtion of two numbers ${a+b}`;
}

document.getElementById("task52").innerHTML=add(5,5);

let isEven=(x)=>x%2==0?"True":"False";

document.getElementById("task53").textContent=isEven(2);

let findMax=(x,y)=>{
    return "Greater Number "+Math.max(x,y);
}
document.getElementById("task54").innerHTML=findMax(10,100);

let multiplyTraditonal={
    value:10,

    myObject1:function (num){
        document.getElementById("task55i").innerHTML=this.value*num;
    },

    myObject2:(num)=>{
        document.getElementById("task55ii").innerHTML=this.value*num;
    }
}
multiplyTraditonal.myObject1(5);
multiplyTraditonal.myObject2(5);

