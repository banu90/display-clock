

function displayTime()
{
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = dateTime.getSeconds();


    if(hr>12)
    {
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
    

    document.getElementById('Hours').innerHTML = padZero(hr)
    document.getElementById('Mins').innerHTML = padZero(min)
    document.getElementById('Seconds').innerHTML = padZero(sec)
}

function padZero(h){
    return h < 10 ? "0" + h : h
}
setInterval(displayTime,1000)