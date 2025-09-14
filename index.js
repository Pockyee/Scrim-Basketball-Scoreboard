let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

home = 0
guest = 0

function homeplus1(){
    home += 1
    homeEl.textContent = home
}

function homeplus2(){
    home += 2
    homeEl.textContent = home
}

function homeplus3(){
    home += 3
    homeEl.textContent = home
}

function guestplus1(){
    guest += 1
    guestEl.textContent = guest
}

function guestplus2(){
    guest += 2
    guestEl.textContent = guest
}

function guestplus3(){
    guest += 3
    guestEl.textContent = guest
}