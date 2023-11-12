let btn = document.querySelectorAll("button");
btn.forEach(function (ele) {
    ele.onclick = function () {
        let i = 1;
        i = i-1;
        this.innerHTML = i;
        if ( i == 0 ) {
            this.setAttribute('disabled','')
        }
    };
});