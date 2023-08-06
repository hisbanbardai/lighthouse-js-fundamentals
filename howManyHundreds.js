function howManyHundreds(numOfBottles){
  if(numOfBottles % 100 !== 0 && numOfBottles % 100 < 100){
    return (numOfBottles - numOfBottles % 100) / 100;
  }
  return (numOfBottles / 100);
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));