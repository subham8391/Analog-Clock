const secondHand=document.querySelector('.sec-hand');
const minuteHand=document.querySelector('.min-hand');
const hoursHand=document.querySelector('.hour-hand');
function setDate(){
    const now=new Date();

    const second=now.getSeconds();
    const secondDeg=((second/60)*360)+90;
    secondHand.style.transform=`rotate(${secondDeg}deg)`;

    const minute=now.getMinutes();
    const minuteDeg=((minute/60)*360)+90;
    minuteHand.style.transform=`rotate(${minuteDeg}deg)`;

    const hours=now.getHours();
    const hourDeg=((hours/12)*360)+90;
    hoursHand.style.transform=`rotate(${hourDeg}deg)`;


}

setInterval(setDate,1000)