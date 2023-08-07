const judgeVegetable = function (vegetables = [], metric) {

  let winner = vegetables[0][metric];
  let winnerName = vegetables[0]["submitter"];

  for(let i = 0; i < vegetables.length; i++){
      if(winner < vegetables[i][metric]){
        winner = vegetables[i][metric];
        winnerName = vegetables[i]["submitter"];
      }
    }
  return winnerName;
    
} 

  console.log(judgeVegetable([
  {
    submitter: 'Old Man Franklin',
    redness: 1,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
], 'plumpness'
));


