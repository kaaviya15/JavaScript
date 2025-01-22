

function generatePassword(){

  const length=document.getElementById("length").value;


     let Lowerletter="abcdefghijklmnopqrstuvwxyz";
     let Upperletter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let SpecialChar="~!#$%^&*?+-()/*";
     let Numbers="1234567890";

     let allowedChar="";
     let password="";
     const includeUpperletter=true;
const includeLowerletter=true;
const includeSpecialChar=true;
const includeNumbers=true;

     allowedChar+=includeLowerletter?Lowerletter:" ";
     allowedChar+=includeUpperletter?Upperletter:" ";
     allowedChar+=includeSpecialChar?SpecialChar:" ";
     allowedChar+=includeNumbers?Numbers:" ";

     if(length<=0){
        document.getElementById("password").innerHTML="Enter Valid length";
       
     }
     if(length === 0){
        document.getElementById("password").innerHTML="Enter length greater than 0";

       
     }

     for(let i=0;i<length;i++){
        let value=Math.floor(Math.random()*allowedChar.length);
        password+=allowedChar[value];
     }
     document.getElementById("password").innerHTML=password;

}







