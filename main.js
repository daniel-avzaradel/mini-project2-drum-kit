const boxes = document.querySelectorAll('.box')

boxes.forEach((item, i) => {
    boxes[i].addEventListener('mouseover', (e) => {
        boxes[i].style.transform = "scale(1.2)";
    })
    boxes[i].addEventListener('mouseout', (e) => {
        boxes[i].style.transform = "scale(1)";
    })
    boxes[i].addEventListener('click', () => {
        boxes[i].style.transform = "scale(1.6)";
        boxes[i].style.boxShadow = "0 0 14px yellow";
        setTimeout(function () {
            boxes[i].style.transform = "scale(1.2)"
            boxes[i].style.boxShadow = "0 0 0 0";

        }, 50);
    })
});

function playBoom() {
    let boom = new Audio('./sounds/boom.wav');
    boom.play();
}

function playClap() {
    let clap = new Audio('./sounds/clap.wav');
    clap.play();
}

function playHiHat() {
    let hihat = new Audio('./sounds/hihat.wav');
    hihat.play();
}

function playHiHat() {
    let hihat = new Audio('./sounds/hihat.wav');
    hihat.play();
}

function playKick() {
    let kick = new Audio('./sounds/kick.wav');
    kick.play();
}

function playOpenHat() {
    let openhat = new Audio('./sounds/openhat.wav');
    openhat.play();
}

function playRide() {
    let ride = new Audio('./sounds/ride.wav');
    ride.play();
}

function playSnare() {
    let snare = new Audio('./sounds/snare.wav');
    snare.play();
}

function playTink() {
    let tink = new Audio('./sounds/tink.wav');
    tink.play();
}
function playTom() {
    let tom = new Audio('./sounds/tom.wav');
    tom.play();
}