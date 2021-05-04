
'use strict';

let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'ArrowDown') {
        boxTop += 10;
    }

    if (keyName === 'ArrowUp') {
        boxTop -= 10;
    }

    if (keyName === 'ArrowRight') {
        boxLeft += 10;
    }

    if (keyName === 'ArrowLeft') {
        boxLeft -= 10;
    }

console.log('keydown event\n\n' + 'key: ' + keyName);
document.getElementById("box").style.top = boxTop + "px";
document.getElementById("box").style.left = boxLeft + "px";
});
