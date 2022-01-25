
const oderBtn = document.getElementById('oder_btn');
const dayOut = document.getElementById('day_out');
const hourOut = document.getElementById('hour_out');
const minOut = document.getElementById('min_out');
const secOut = document.getElementById('Sec_out');
const time_out = document.getElementById('time_out');

let stopcount;

oderBtn.addEventListener('click', function(e){
    e.preventDefault();



     stopcount = setInterval(() => {
        
       

        let in_date = document.getElementById('input_date').value;
        let in_time = document.getElementById('input_time').value;

        let startTime = new Date();
        let endTime = new Date(in_date + " " + in_time);

        let mainTime = Math.floor(Math.abs(endTime.getTime() - startTime.getTime()));

        let totalSec = Math.floor(mainTime / 1000);
        let totalMin = Math.floor(totalSec / 60);
        let totalHour = Math.floor(totalMin / 60);
        let totalDay = Math.floor(totalHour / 24);

        let mainHour = totalHour - (totalDay * 24);
        let mainMin = totalMin - (totalDay * 24 * 60 ) - (mainHour * 60);
        let mainSic = totalSec - (totalDay * 24 * 60 * 60) - (mainHour * 60 * 60) - (mainMin * 60);

        dayOut.innerHTML = totalDay;
        hourOut.innerHTML = mainHour;
        minOut.innerHTML = mainMin; 
        secOut.innerHTML = mainSic;
        time_out.style.color = '';

        if(mainMin == 0 && mainSic == 0 && mainHour == 0 && totalDay == 0){
            time_out.style.color = "red";
            clearInterval(stopcount);
        }

    }, 1000);

});