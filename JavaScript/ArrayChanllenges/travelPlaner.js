let trip1 = ["Paris", "Rome", "Berlin"];
let trip2 = ["Tokyo", "Seoul", "Bangkok", "Rome"];
// let multipleTravel=[...trip1,...trip2]
// let removeElement=new Set(multipleTravel)
// console.log([...removeElement])
// let covertInArray=[...removeElement]
// console.log(covertInArray)


function collectCities(...cities){
    return cities
}
console.log(collectCities(trip1,trip2))


function mergePlans(plan1, plan2){
    let combine=[...plan1,...plan2]
    return combine;
}
let mergeArr=mergePlans(trip1,trip2)
console.log(mergeArr)

function uniqueCities(allCities){
    let i=0
    let emptyArr=[]
    while(i<allCities.length){
      if (!emptyArr.includes(allCities[i])){
        emptyArr.push(allCities[i])
      }
      i++
    }
    return emptyArr;
}
let finalCity=uniqueCities(mergeArr)
console.log(finalCity)


finalCity.forEach(cityGet=>{
    console.log(cityGet)
})


