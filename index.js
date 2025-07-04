class Countdown {
    /**
     * @param {Number} duration the duration in seconds
     * @param {Number} round what decimal to round the Countdown
     */
    constructor(duration, round) {
        this.duration = duration * 1000;
        this.startTime = null;
        this.started = false;
        this.time = null;
        this.round = round;
    }

    start() { // starts the Countdown
        this.startTime = Date.now();
        this.started = true;
    }

    getTime() { // gets the Countdowns time in seconds
        if (!this.started) return;
        this.time = Math.max(0, (this.duration - (Date.now() - this.startTime)) / 1000).toFixed(this.round);
        return parseFloat(this.time);
    }

    end() { // ends the Countdown
        this.started = false;
        this.startTime = null;
        this.time = null;
    }

};

class Timer {
       /**
     * @param {Number} duration the duration in seconds
     * @param {Number} round what decimal to round the Timer
     */
    constructor(duration, round) {
        this.duration = duration;
        this.startTime = null;
        this.started = false;
        this.time = null;
        this.round = round;
    }

    start() { // starts the timer
        this.startTime = Date.now();
        this.started = true;
    }

    getTime() { //gets the timers time in seconds
        if (!this.started) return;
        this.time = Math.min(this.duration, ((Date.now() - this.startTime) / 1000)).toFixed(this.round);
        return parseFloat(this.time);
    }

    end() { // ends the timer
        this.started = false;
        this.startTime = null;
        this.time = null;
    }

};

function getSimpleTimeDifference(time1, time2) {
       /**
     * @param {Number} time1 the first time in milliseconds (has to be bigger than time2)
     * @param {Number} time2 the seconds time in milliseconds (has to be smaller than time1)
     * the output is in seconds
     */
    return getTimeDifference(time1, false, time2, false, true);
};

function getTimeDifference(time1, inSeconds1, time2, inSeconds2, outputInSeconds) {
    /**
     * @param {Number} time1 the first time(has to be bigger than time2)
     * @param {Number} time2 the seconds time(has to be smaller than time1)
     * @param {Boolean} inSeconds1 whether the first time is in seconds or not
     * @param {Boolean} inSeconds2 whether the seconds time is in seconds or not
     * @param {Boolean} outputInSeconds wether the output is in seconds or not
     */
  const t1 = inSeconds1 ? time1 * 1000 : time1;
  const t2 = inSeconds2 ? time2 * 1000 : time2;
  const diff = t1 - t2;
  return outputInSeconds ? diff / 1000 : diff;
};

export { Countdown, Timer, getSimpleTimeDifference, getTimeDifference};