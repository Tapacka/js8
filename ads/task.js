const rotator = Array.from(document.getElementsByClassName('rotator'));
const span = Array.from(rotator[0].querySelectorAll('span'));
let index = 0;
let speed = 0;

function makeActive (ind) {
    span.forEach((elem) => {
        elem.className = 'rotator__case'
    })
    span[ind].className = "rotator__case rotator__case_active";
    speed = span[ind].getAttribute('data-speed')
    let color = span[ind].getAttribute('data-color');
    span[ind].style.color = color;
}

setTimeout(function run() {
    makeActive(index);    
    index = index + 1;
    if (index > span.length - 1) {
        index = 0;        
    }
    setTimeout(run, speed)
}, speed)