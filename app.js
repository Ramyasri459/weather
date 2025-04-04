// global scope(let,const,var) are also used
// var a=10
// console.log(a,"coming from black......")
// {
//                     console.log(a,"coming back.....")
// }
// function ramya(){
//                     console.log(a,"coming back.....")  
// }
// ramya()
// function scope
// function ramya(){
//                     var a=10
//                     console.log(a,"coming back.....")  
// }
// ramya()
// block scope
// {
//       var a=10 
//       console.log(a,"coming....")             
// }
// function ramya(){
//                     var a=10 
//                     console.log(a,"coming....")             
//               } 
// ramya()
// lexical Scpoe


// function outer() {
//                     const a = 10;  
//                     return function inner() {
//                         console.log(a, "from inner....");
//                     }
//                 }

//                 const result = outer();  
//                 result(); 



//                 timers
// setTimeout
// setTimeout(()=>{
//                     console.log("this time will be exicuting......")
// },2000)
// settime intervel
// setInterval(() => {
//                     console.log("this time will be exicuting......")
// }, 3000);



// const date=new Date()
// console.log(date.toString())
// // console.log( date.getMonth())
// // console.log(date.getDate())
// // console.log(date.getDay())
// // console.log(date.getFullYear())
// const hours=document.getElementById('hours')
// const mints=document.getElementById('mints')
// const seconds=document.getElementById('seconds')
// setInterval(()=>{

// },1000)
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getfetch)
// hours.innerText=date.getHours()
// mints.innerText=date.getMinutes()
// seconds.innerText=date.getSeconds()


var timer;
         var hrs = 0;
        var min = 0;
        var sec = 0;
        var isRunning = false;

        function updateDisplay() {
            document.getElementById('hrs').textContent = String(hrs).padStart(2, '0');
            document.getElementById('min').textContent = String(min).padStart(2, '0');
            document.getElementById('sec').textContent = String(sec).padStart(2, '0');
        }

        function start() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(function() {
                    sec++;
                    if (sec == 60) {
                        sec = 0;
                        min++;
                    }
                    if (min == 60) {
                        min = 0;
                        hrs++;
                    }
                    updateDisplay();
                }, 1000);
                document.getElementById('str').disabled = true; 
            }
        }

        function stop() {
            clearInterval(timer);
            isRunning = false;
            document.getElementById('str').disabled = false; 
        }