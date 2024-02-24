//Initialize three variables seconds, minutes and hours
//Initialize a variable timer tha sets our interval

//Making functions - 

//1. updateStopwatch = second++, (Increasing the variable value)
//2. updateDisplay = DOM manipulation, through doc.getElementById
//3. format time = adds zero before nos. smaller than 10

//4. stopStopwatch = clearInteval, disable the start button
//5. resetStopwatch = clearInteral, call updatedisplay(), disable the start button

//first try out the second timer than the milliseconds timer


let timer;
// A variable to store the interval ID returned by 'setInterval'.

let ms = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {

  //second timer
  timer = setInterval(updateStopwatch, 1000);
  //this runs the updateStopwatch function = for loop
  //1 sec ke gap se print kr raha hai


  //**displaying microsecond timer

  // timer = setInterval(function() {
  //   updateStopwatch();
  //   updateDisplay(); // Call updateDisplay to update the displayed time
  // }, 1);

  //set the timer to 1, for testing purposes you can set it to 0.001
 

  document.getElementById('startBtn').disabled = true;
  //.disables the start button
  //stop hi nhi hoga, if u comment out this line
}

// setInterval function:

// The setInterval function is used to repeatedly execute a function or run a piece of code at specified intervals.

// It takes two arguments: 
//1. the function to be executed
//2. the time interval (in ms) between each execution.

// The function continues to execute until it is explicitly cleared using clearInterval

function stopStopwatch() {
  clearInterval(timer);
  //used with setInterval stops a recurring/repeating function(setInterval)

  document.getElementById('startBtn').disabled = false;
}


function resetStopwatch() {
  clearInterval(timer);
  //used with setInterval stops a recurring function
  ms = 0
  seconds = 0;
  minutes = 0;
  hours = 0;
  
  updateDisplay();
  //this function is for DOM manipulation

  document.getElementById('startBtn').disabled = false;
  //stops access for this id for user interaction
}

function updateStopwatch() {
  // ms++;
  // if (ms === 1000) {
  //   ms = 0;
    seconds++;
  

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;

        if (hours === 24) {
          seconds = 0;
          minutes = 0;
          hours = 0;

          seconds++;
        }
      }
    } 

    updateDisplay();
  

  //The below code (for loop) only initites the operation and then the if condition takes on the main task of updating the second value

  // for (let i = 0; i < 1; i++) {
  //   seconds++;

  //   updateDisplay();

  //   if (seconds === 60) {
  //     seconds = 0;
  //     minutes++;

  //     if (minutes === 60) {
  //       minutes = 0;
  //       hours++;
  //     }

  //     if(hours === 24){
  //       seconds = 0
  //       minutes = 0
  //       hours =0

  //       seconds++

  //     }
      
  //   }

  console.log("hours=",hours, "minutes=",minutes, "seconds=",seconds)

  //**for microsecond */
  // console.log("hours=",hours, "minutes=",minutes, "seconds=",seconds, "microseconds=",ms)
  // }
  
  //essential to call this function here, resets the time variables to ensure that the display reflects the reset time.
}

function updateDisplay() {
  const display = document.getElementById('display');

  //display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  //another way of DOM manipulation

  display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  //**for displaying ms

  // display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(ms)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//returns single digit nos. with 0 in front
//ternary if condition, if the no. is less than 10, notice the zero

// setTimeout function:

// The setTimeout function is used to execute a function or run a piece of code after a specified delay.
// It takes two arguments: the function to be executed and the time delay (in ms) before execution.
// Unlike setInterval, setTimeout executes the function only once.