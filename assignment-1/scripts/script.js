let myButton = document.querySelector("button");
let myHeading = document.querySelector("h4");

function friendlyMessage() {
    const age = Number(document.getElementById("age").value);
    const name = document.getElementById("name").value
    if (age >= 100 && age <= 123) {
        myHeading.textContent = `You're part of the Greatest Generation, ${name}`;
    } else if (age >= 79 && age <= 99) {
        myHeading.textContent = `You're part of the Silent Generation, ${name}`;
    } else if (age >= 60 && age <= 78) {
        myHeading.textContent = `You're part of the Baby Boomer Generation, ${name}`;
    } else if (age >= 45 && age <= 59) {
        myHeading.textContent = `You're part of Generation X, ${name}`;
    } else if (age >= 30 && age <= 44) {
        myHeading.textContent = `You're part of the Millenials Generation, ${name}`;
    } else if (age >= 12 && age <= 29) {
        myHeading.textContent = `You're part of Generation Z, ${name}`;
    } else if (age > 0 && age <= 12) {
        myHeading.textContent = `You're part of Generation Alpha, ${name}`;
    }
}

myButton.onclick = () => {
    friendlyMessage();
};