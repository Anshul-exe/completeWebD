const die1 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").setAttribute("src", `./images/dice${die1}.png`)

const die2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img2").setAttribute("src", `./images/dice${die2}.png`)

if ( die1 > die2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}
else if ( die1 < die2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}
else {
    document.querySelector("h1").textContent = "Draw!"
}