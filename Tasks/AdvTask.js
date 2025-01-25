function rescursion(n){
    if(n==0)return 1;
    return n*rescursion(n-1);
}
document.getElementById("Advtask1").innerHTML="Advtask1: Recursion  "+rescursion(5);

function fibonacciSeries(n){
    if(n===0)return 0;
    if(n===1 || n===2)return 1;
    return fibonacciSeries(n-1)+fibonacciSeries(n-2);
}
document.getElementById("Advtask2").innerHTML="Advtask2: Fibonnaci number "+fibonacciSeries(5);

function numberOfWays(n){
    if(n===0)return 1;
    if(n<0)return 0;
    return numberOfWays(n-1)+numberOfWays(n-2)+numberOfWays(n-3);

}
document.getElementById("Advtask3").innerHTML="Advtask3: Number of ways "+numberOfWays(5);


function flattenArray(arr){
    return arr.reduce((flat,item)=>flat.concat(Array.isArray(item)?flattenArray(item):item),[]);
}
document.getElementById("Advtask4").innerHTML="Advtask4: flattenArray "+flattenArray([1,2,[3,4],5]);


function towerOfHanoi(n,source,destination,auxillary){
    if(n===1){
        document.getElementById("Advtask5").innerHTML +=`Advtask5: towerofhanoi moves 1 from ${source} to ${destination}<br>`;
        return ;
    }
    towerOfHanoi(n-1,source,auxillary,destination);
    document.getElementById("Advtask5").innerHTML += `towerofhanoi moves ${n} from ${source} to ${destination}<br>`;
    towerOfHanoi(n-1,auxillary,destination,source);
}
towerOfHanoi(3,'A','B','C');

function arbitraryNumber(...num){
    return num.reduce((sum,i)=>sum+i,0);
}
document.getElementById("Advtask6").innerHTML="Advtask6: arbitrarySum "+arbitraryNumber(5,3,2,1);

function arraySum(...arr){
    return arr.reduce((sum,i)=>sum+i,0);
}

document.getElementById("Advtask7").innerHTML="Advtask7: sumOfArray "+arraySum(...[1,2,3,4,5]);

function deepCloneObject(user){
    return JSON.stringify(user);
}
let user={
    name:"Kaaviya",
    age:19,
    dep:"EC"
};
document.getElementById("Advtask8").innerHTML="Advtask8: deepCloneObjectstoJSON "+deepCloneObject(user);

function mergeTwoObject(obj1,obj2){
    return {...obj1,...obj2};
}
let obj1={name:"sonika",age:19,dep:"EE"};
let obj2={location:"Thiruchengode"};
let merge=JSON.stringify(mergeTwoObject(obj1,obj2));
document.getElementById("Advtask9").innerHTML="Advtask9: mergeTwoObject "+merge;


let mergeObj=JSON.parse(merge);
let mergeStr='';
for(let key in mergeObj){
    mergeStr+=`${key} : ${mergeObj[key]}<br>`;
}
document.getElementById("Advtask10").innerHTML="Advtask10: jsonToObject "+mergeStr;

function yes(){
    let msg="Hello World";
      return function no(){
          return msg;
    };
    
}
document.getElementById("Advtask11").innerHTML="Advtask11: Closure "+yes()();


function increment(){
    let count=0;
    return {
        increment:function(){
            return count+=1;
        },
        decrement:function(){
            return count-=1;
        },
        getCount:function(){
           return count;
        }
    }
}
const counter1=increment();
const counter2=increment();
document.getElementById("Increment1").addEventListener("click",function(){
    counter1.increment(),
   document.getElementById("displayCount1").innerHTML=counter1.getCount()
});
document.getElementById("Decrement1").addEventListener("click",function(){
    counter1.decrement(),
    document.getElementById("displayCount1").innerHTML=counter1.getCount()
});

document.getElementById("Increment2").addEventListener("click",function(){
    counter2.increment(),
   document.getElementById("displayCount2").innerHTML=counter2.getCount()
});
document.getElementById("Decrement2").addEventListener("click",function(){
    counter2.decrement(),
    document.getElementById("displayCount2").innerHTML=counter2.getCount();
});

function getName(){
    let name="lohii";
    return function names(){
         return name;
    };
}
//document.getElementById("Advtask13").innerHTML=getName()().name;


function getFunction(a,b){
    
    return {
        add:function(){
            return (a+b);
        },
        sub:function(){
            return a-b;
        },
        mul:function(){
            return a*b;
        },
        div:function(){
            return a/b;
        }
    }
}

document.getElementById("enterContent").addEventListener("click",function(){
    const fun=document.getElementById("getValue").value;
    const a=parseInt(document.getElementById("getA").value);
    const b=parseInt(document.getElementById("getB").value);
    
    let mathOperation=getFunction(a,b);
    if(mathOperation[fun])
    document.getElementById("displayContent").innerHTML=`Answer: ${mathOperation[fun]()}`;
    else
    document.getElementById("displayContent").innerHTML="Not Valid Input";
});

function getGreeting(sec){
    return new Promise(
        (resolve,reject)=>{
          setTimeout(()=>{
            resolve("Welcome Home");
          },sec*1000);
        });
}

getGreeting(3).then((Greeting)=>console.log(Greeting)
);


fetch('https://jsonplaceholder.typicode.com/users/1').then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error));

function randomNumber(n){
return new Promise(
    (resolve,reject)=>{
        if(n%2==0){
            setTimeout(()=>
            resolve("Number is even"),3000
            )                
        
    }else{
        reject("Number is odd");
    }
    }
);
}

randomNumber(Math.floor(Math.random()*20+1)).then((num)=>console.log(num)).catch((error)=>console.log(error));


const promise1=fetch('https://jsonplaceholder.typicode.com/users/1');
const promise2=fetch('https://jsonplaceholder.typicode.com/users/2');

function multiplepromises(...promise){
    return Promise.all(promise).then((response)=>Promise.all(response.map((res)=>res.json())));
}
multiplepromises(promise1,promise2).then((data)=>console.log(data)).catch((error)=>console.log(error));

function walkup(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Waked up"),1000);
});
}

function brush(){
    return new Promise(
        (resolve)=>{
            setTimeout(()=>resolve("Brushed my teeth"),1500);
        }
    );
}
function bathed(){
    return new Promise(
        (resolve)=>{
            setTimeout(()=>resolve("Bathed and Dressed"),2000);
        }
    );
}

walkup().then((res)=>{console.log(res); return brush()}).then((res)=>{console.log(res); return bathed()}).then((res)=>{console.log(res); console.log("Morning task completed")}).catch((error)=>console.log(error));