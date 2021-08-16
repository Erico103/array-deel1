const log = console.log

const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
const findSpiderMan = (superheroes) => {
  return superheroes.find((superhero) => {
    return superhero.name === 'Batman'
  })
}
  
  console.log(findSpiderMan(superheroes)) 
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

 const doubleArrayForeach = array =>{
  let newArray = [] 
  array.forEach(number => {
     newArray.push(number * 2)
   })
   return newArray;
 }
 

 log(doubleArrayForeach([1, 2, 3]) ) 
  // result should be [2, 4, 6]

  const doublewithmap = array => {
    return array.map(num =>{
     return num + num
    })
  }

  log(doublewithmap([1,2,3]))

const containsNumberBiggerThan10 = array => {
  return array.some(number =>{
    return number > 10
  })
}

  log('ik ben groter dan 10', containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) )
  // result should be true
  log('ik ben groter dan 10', containsNumberBiggerThan10([10,9]))
  // result should be false

const isItalyInTheGreat7 = array =>{
  return array.includes("Italy")
  
}

  log('is italy in the 7?',isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) )
  // result should be true


const tenfold = array => {
  newArray = [];
  array.forEach(number => {
   newArray.push(number * 10)
  })
 return newArray
}

  console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
  // result should be [10, 40, 30, 60, 90, 70, 110]

const isBelow100 = array => {
   return array.every(number => {
    return number < 100
  })
}

  console.log('Onder de 100?',isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 10, 11, 77, 84, 98 ]))
  // result should be: false

const bigSum = array => {
  return array.reduce((acc, num) =>{
    return acc + num
  })
}
  console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118