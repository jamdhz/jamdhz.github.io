const wheel = document.querySelector(".middle");
const spinBtn = document.querySelector(".clickablebutton");
const finalValue = document.querySelector(".HADIAH");
const rewards = document.querySelector(".Rewards");
const sentUser = document.getElementById("username");
const sentKey = document.getElementById("key");


const rotationValues = [
    { minDegree: 0, maxDegree: 23, value: "10.000" },
    { minDegree: 23, maxDegree: 69, value: "20.000" },
    { minDegree: 70, maxDegree: 116, value: "50.000" },
    { minDegree: 117, maxDegree: 151, value: "100.000" },
    { minDegree: 152, maxDegree: 175, value: "5.000.000" },
    { minDegree: 176, maxDegree: 197, value: "2.000.000" },
    { minDegree: 198, maxDegree: 244, value: "1.000.000" },
    { minDegree: 245, maxDegree: 289, value: "500.000"},
    { minDegree: 290, maxDegree: 336, value: "200000" },
    { minDegree: 337, maxDegree: 360, value: "10.000" },
];

const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            setTimeout(function() {
                finalValue.innerHTML = `<p>Hadiah: Rp${i.value}</p>`;;
              }, 4000);
            console.log(`Angle: ${angleValue}, Value: ${i.value}`);
            break;
        }
    }
};

const DefaultTotalSpin = 1; 

spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    
    let TotalSpin = DefaultTotalSpin;
    let currentRotation = 0;
    
    // Rotate the wheel
    const spinWheel = () => {
        if (TotalSpin <= 0) {
            spinBtn.disabled = false;
            return;
        }
        
        const minDegree = 3600;
        const maxDegree = 72000;
        const randomDegree = Math.floor(Math.random() * (maxDegree - minDegree)) + minDegree;

        // const rotateValue = ;
        const rotateValue = 360 * 3 + randomDegree; 
        currentRotation -= rotateValue;

        wheel.style.transition = "transform 4s ease-out";
        wheel.style.transform = `rotate(${currentRotation}deg)`;
        rewards.style.transition = "transform 4s ease-out";
        rewards.style.transform = `rotate(${currentRotation}deg)`;

        const finalDegree = (rotateValue + 360) % 360;

        TotalSpin--;
        setTimeout(spinWheel, 5000);
        valueGenerator(finalDegree);
    };

    spinWheel();
    
});
