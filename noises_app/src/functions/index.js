import $ from "jquery";
let countDown
let test =""
export function timerCountDown(duration, reset){
    if(reset){
        clearInterval(countDown)
        if(!$("#count-down-timer-button").hasClass("play")){
            $("#count-down-timer-button").addClass("play")
            $("#count-down-timer-button").removeClass(" pause")
            $("#count-down-timer-button i").removeClass("fa-pause-circle")
            $("#count-down-timer-button i").addClass("fa-play-circle")
        }
        return
    }
    if($("#count-down-timer-button").hasClass("play") || countDown === null){
        $("#count-down-timer-button").removeClass("play")
        $("#count-down-timer-button").addClass(" pause")
        $("#count-down-timer-button i").addClass("fa-pause-circle")
        $("#count-down-timer-button i").removeClass("fa-play-circle")
        let times = duration.split(":")
        times = times.map((x) =>{
            return parseInt(x)
        })
        countDown = setInterval(() =>{
            let hours = times[0] < 10 ? "0"+times[0] : times[0] 
            let minutes = times[1]  < 10 ? "0" + times[1] : times[1]
            let seconds = times[2]  < 10 ? "0" + times[2] : times[2]
            times[2] -=1
            $("#count-down-timer").text(hours+":"+minutes+":"+seconds)
            test = hours+":"+minutes+":"+seconds
            
            if(times[2]<0){
                times[2] = 59
               times[1] -=1
            }
            if(times[1]<0){
               times[1] = 59
                times[0] -=1
            }
            if(times[0]<0){
                clearInterval(countDown)
            }
        },1000)

    } else {
        clearInterval(countDown)
        $("#count-down-timer-button").removeClass("pause")
        $("#count-down-timer-button").addClass(" play")
        $("#count-down-timer-button i").removeClass("fa-pause-circle")
        $("#count-down-timer-button i").addClass("fa-play-circle")
        return test
    }

}