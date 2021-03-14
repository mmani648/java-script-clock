function clock(){
var fullTime= new Date();
var hours =  fullTime.getHours();
var mins =fullTime.getMinutes();
var sec=fullTime.getSeconds();
hours = hours-12;
if(hours<10){
    var hours="0" + hours;
}
if(mins<10){
    var mins="0"+ mins;
}
if(sec<10){
    var sec="0"+ sec;
}
document.getElementById("hour").innerHTML= hours;
document.getElementById("minute").innerHTML=":"+mins;
document.getElementById("seconds").innerHTML=":"+sec;
}
setInterval(clock,0);