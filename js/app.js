const displayMonitor = document.getElementById('display');

function calculator(x) {
    displayMonitor.value += x;
}
// for equal
function calculation() {
    displayMonitor.value = eval(displayMonitor.value);
}

//for clear all
function allClear() {
    displayMonitor.value = '';
}

function backSpace() {
    const exp = displayMonitor.value;
    displayMonitor.value = exp.slice(0, -1);
}