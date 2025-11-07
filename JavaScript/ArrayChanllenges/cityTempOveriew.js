const MIN_PLEASANT = 18; 
const MAX_PLEASANT = 28;

let day1 = [22, 24, 23, 25]; 
let day2 = [17, 19, 18]; 
let day3 = [29, 31];

let calculateAverage=function(dayReadings){

    let sumAvg=0
    for(let i=0; i<dayReadings.length; i++){
      sumAvg=sumAvg+dayReadings[i]
    }
    return (sumAvg/dayReadings.length).toFixed(1);

}
let a = calculateAverage(day1);
console.log(a);

let calculateDailyTemps=function(...days){

    let day=days.map(arr=>{
      return calculateAverage(arr)
    })
    return day;
}
console.log(calculateDailyTemps(day1,day2,day3))


let countPleasantDays=function(dailyC, min, max){
   let a=dailyC.filter(arr=>{
        return (arr>=min && arr<=max)
    })
    return a.length
}

let dailyC = calculateDailyTemps(day1,day2,day3)

console.log(countPleasantDays(dailyC,MIN_PLEASANT,MAX_PLEASANT))


let convertToFahrenheit=function(dailyC){

  let fahrenHeit = dailyC.map(arr=>{
    let b = ((arr*9/5)+32).toFixed(1);
    return b;
  })
  return fahrenHeit;
}
let f = convertToFahrenheit(dailyC);
console.log(f);


dailyC.forEach((a,index)=>{
  
  let p = (a >= MIN_PLEASANT && a <= MAX_PLEASANT) ? `yes` : `no`;

  console.log("Day: ", index+1, a, "°C", f[index] ,"°F", p);
  
})


