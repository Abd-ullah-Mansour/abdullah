let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let num = document.getElementById('num');
let i = 0;
btn1.onclick = function() {
    i = i + 1;
    num.value = i
}
btn2.onclick = function() {
    i = 0;
    num.value = i;
}