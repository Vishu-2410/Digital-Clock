
    function digitalClock(){
        let h=new Date().getHours();
        let m=new Date().getMinutes();
        let s=new Date().getSeconds();
        let ampm="AM";

        if(h>12){
            h=h-12;
            ampm="PM";
        }

        document.getElementById("hour").innerText=h;
        document.getElementById("minute").innerText=m;
        document.getElementById("second").innerText=s;
        document.getElementById("ampm").innerText=ampm;
        setTimeout(()=>{
            digitalClock();
        },1000)
    }
   
