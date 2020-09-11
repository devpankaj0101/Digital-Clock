window.onload = function(){
    const hour = document.querySelector('.hour');
    const min = document.querySelector('.minute');
    const sec = document.querySelector('.seconds');
    setInterval(function(){
        let time = new Date();
        let hh = time.getHours();
        console.log(hh);
        let mm = time.getMinutes();
        let ss = time.getSeconds();
        hour.innerHTML = hh;
        min.innerHTML = mm;
        sec.innerHTML = ss;
    },1000);
}