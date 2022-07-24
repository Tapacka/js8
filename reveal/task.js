const div = document.getElementsByClassName('reveal');

function isVisible(elem) {
    const {top, bottom} = elem.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true
}

window.addEventListener('scroll', function() {
    Array.from(div).forEach(element => {
        if (isVisible(element) == true) {
            element.className = 'reveal reveal_active';
        } else {
            element.className = 'reveal'
        }})
})
