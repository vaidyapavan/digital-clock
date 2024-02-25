function showtime()
{
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var time=h + ":" + m + ":"+ s;
    document.getElementsByTagName("h1")[0].innerText=time;
    setTimeout(showtime,1000)
}