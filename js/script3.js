let btn = document.querySelector('.count');
let i = 1;
btn.addEventListener('click',function(){
    i = i-1; 
    btn.textContent = i;
    if ( i == 0 ) {
        btn.setAttribute('disabled','');
    }
});
let btn2 =document.querySelector('.count-1');
let a = 1;
btn2.addEventListener('click',function(){
    a-- ;
    btn2.textContent = a;
    if (a == 0) {
        btn2.setAttribute('disabled','');
    }
});
let btn3 =document.querySelector('.count-2');
let b = 3;
btn3.addEventListener('click',function(){
    b-- ;
    btn3.textContent = b;
    if (b == 0) {
        btn3.setAttribute('disabled','');
    }
});
let btn4 =document.querySelector('.count-3');
let c = 1;
btn4.addEventListener('click',function(){
    c-- ;
    btn4.textContent = c;
    if (c == 0) {
        btn4.setAttribute('disabled','');
    }
});
let btn5 =document.querySelector('.count-4');
let d = 1;
btn5.addEventListener('click',function(){
    d-- ;
    btn5.textContent = d;
    if (d == 0) {
        btn5.setAttribute('disabled','');
    }
});
let btn6 =document.querySelector('.count-5');
let e = 1;
btn6.addEventListener('click',function(){
    e-- ;
    btn6.textContent = e;
    if (e == 0) {
        btn6.setAttribute('disabled','');
    }
});