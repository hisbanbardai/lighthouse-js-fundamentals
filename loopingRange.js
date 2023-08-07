function range(start, end, step){
  let array_Range = [];
  if((start < end) && (step > 0) && ((start !== undefined) || (end !== undefined) || (step !== undefined))){
    for(let i = start; i <= end; i += step){
      array_Range.push(i);
    }
  } 
  return array_Range;
}


console.log(range(-5,2,3));