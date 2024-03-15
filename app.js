//Toggle Btn
const toggleButton = document.querySelector('#toggleButton');
const digitalClock = document.getElementById('Dg-clock');
const analogClock = document.querySelector('.clock');
const dgtalContainer=document.querySelector('.dgt-clock');

let isToggle = false;

// Initially start the analog clock
startAnalogClock();
dgtalContainer.style.display = 'none';
toggleButton.addEventListener('click', () => {
    isToggle = !isToggle;

    if (isToggle) {
        // Show Digital Clock
        dgtalContainer.style.display = 'flex';
        analogClock.style.display = 'none';
        toggleButton.textContent='Analog'
        startDigitalClock();
    } else {
        // Show Analog Clock
        dgtalContainer.style.display = 'none';
        analogClock.style.display = 'block';
        toggleButton.textContent='Degital'
        startAnalogClock();
    }
});

function startDigitalClock() {
    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        // Get references to the elements
        let hourElement = document.getElementById("hour");
        let minuteElement = document.getElementById("minute");
        let secondElement = document.getElementById("second");

        // Set text content
        hourElement.textContent = hour < 10 ? '0' + hour : hour;
        minuteElement.textContent = minute < 10 ? '0' + minute : minute;
        secondElement.textContent = second < 10 ? '0' + second : second;

        // Apply different colors
        hourElement.style.color = 'black';
        minuteElement.style.color = 'orange';
        secondElement.style.color = 'blueviolet';
    }, 1000);
}

function startAnalogClock() {
    const secondHand = document.querySelector('.sec-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hoursHand = document.querySelector('.hour-hand');

    function setDate() {
        const now = new Date();

        const second = now.getSeconds();
        const secondDeg = ((second / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;

        const minute = now.getMinutes();
        const minuteDeg = ((minute / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        const hours = now.getHours();
        const hourDeg = ((hours / 12) * 360) + 90;
        hoursHand.style.transform = `rotate(${hourDeg}deg)`;
    }

    setInterval(setDate, 1000);
}
