const el = document.querySelector('.stoker');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


document.body.addEventListener('mousemove',(event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

tick();
function tick() {
    requestAnimationFrame(tick);

    currentX +=  (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    el.style.transform = `translate(${currentX}px,${currentY}px)`;
}