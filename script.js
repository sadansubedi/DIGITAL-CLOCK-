function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    
    if(hrs>=12){
        session.textContent='PM';
        hrs = hrs-12;
    }else{
        session.textContent='AM';
    }

    

    document.getElementById('hours').textContent=hrs;
    document.getElementById('minutes').textContent=min;
    document.getElementById('second').innerHTML=sec;/* you can do with .innerHTML also but textcontent is best ok*/
}
setInterval(displayTime,10);