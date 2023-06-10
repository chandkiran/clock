const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second');

setInterval(()=> {

    let d = new Date();
    let h = d.getHours();
  let   m = d.getMinutes();
   let  s = d.getSeconds();
   let  hrot = (30 * h + m / 2);
   let mrot = 6 * m;
   let srot = 6 * s;


    hour.style.transform = `rotateZ(${hrot}deg)`;
    minute.style.transform = `rotateZ(${mrot}deg)`;
    second.style.transform = `rotateZ(${srot}deg`;
}, 1000);
// set interval method calls a function at specified intervals (milliseconds)keeps calling until clearInterval()is called