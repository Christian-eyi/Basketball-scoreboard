let scoreh = document.getElementById("home-score")
let scoreg = document.getElementById("guest-score")

// let scorels = scoreh
// console.log(scorels);
let count = 0
let coumt = 0
function plusoneh() {
  count = count + 1
  scoreh.textContent = count
}
function plustwoh() {
  count = count + 2
  scoreh.textContent = count
}

function plusthreeh() {
  count = count + 3
  scoreh.textContent = count
}
function plusoneg() {
  coumt = coumt + 1
  scoreg.textContent = coumt
}
function plustwog() {
  coumt = coumt + 2
  scoreg.textContent = coumt
}

function plusthreeg() {
  coumt = coumt + 3
  scoreg.textContent = coumt
}
function newgame() {
  count = 0
  coumt = 0
  scoreh.textContent = count
  scoreg.textContent = coumt
}

