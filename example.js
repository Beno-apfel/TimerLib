import { Timer, getSimpleTimeDifference} from "./index" //import

//example Timer usage
let timer = new Timer(5,1); // creates a five seconds Timer, that is rounded to 1 decimal

timer.start(); //starts the timer

register("chat", () => {
ChatLib.chat(timer.getTime());  //gets the timers current time if a certain chat message is being sent
}).setCriteria("whats the time");

//example timedifference usage
register("idk", () => {
    time1 = Date.now() // defines the first time (dont use register("idk")
})

register("idk2", () => {
    time2 = Date.now() // defines the second time (dont use register("idk2")
})

getSimpleTimeDifference(time1, time2); // calculates the time between time1 and time2, make sure time1 is higher than time2, because the function calculates time1 - time2