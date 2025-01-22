function rollDice(){
    const num=document.getElementById("diceNumber").value;
    const diceNumber=document.getElementById("diceResult");
    const diceResult=document.getElementById("diceImages");
    let values=[];
    let images=[];
    for(let i=0;i<num;i++){
        let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/dice${value}.jpg">`);
    }
    diceNumber.textContent=`Dice: ${values.join(', ')}`;
   diceResult.innerHTML=images.join('');
}

