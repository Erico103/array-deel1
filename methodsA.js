//A

const addTheWordCool = ["nice", "awesome", "tof"];
addTheWordCool.push("cool");

console.log("Add cool:", addTheWordCool);
// resultaat: ["nice", "awesome", "tof", "cool"]

//B
const amountOfElementsInArray =['appels', 'peren', 'citroenen']
console.log(amountOfElementsInArray.length); 
// 3

//C
const selectBelgiumFromBenelux=["Belgie", "Nederland", "Luxemburg"]
console.log(selectBelgiumFromBenelux[0]); 
  // resultaat: "Belgie" 

  //D
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];
console.log(lastElementInArray[3]); 
  // resultaat: "Schildpad"


  //E
  //Slice haalt een sektie ut de array en returnt een nieuwe array
  //Splice voegt toe of verwijdert elementen uit een array

  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
  let array2 = array.slice(1,4);
  return array2
  }
  const impeachTrumpSplice = function(array) {
   array.splice(0,1);
   return array
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

  //F

const stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
const jointed =stringsTogether.join(" ");

  console.log(jointed) 
  //resultaat: "Winc Academy is leuk ;-}"

  //G

  array1 = [1,2,3];
  array2 = [4,5,6];

  const combineArrays = array1.concat(array2)

  console.log(combineArrays)
  // resultaat: [1,2,3,4,5,6]

