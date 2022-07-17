

var time=new Date();
time.getDate(2);
time.setMonth(8)
time.setFullYear(2022);

setInterval(function(){
    var now=new Date().getTime();
     var d=time-now;
     var day=Math.floor(d/1000/60/60/24);
     var hours=Math.floor(d/1000/60/60);
     var minute=Math.floor(d/1000/60);
     var sec=Math.floor(d/1000)

     hours%=24;
     minute%=60;
     sec%=60;

     document.getElementById("day").innerText=day;
     document.getElementById("hours").innerText=hours;
     document.getElementById("min").innerText=minute;
     document.getElementById("secs").innerText=sec;
},1000)
