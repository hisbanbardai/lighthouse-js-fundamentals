const finalPosition = function (moves) {
  let x = 0,
    y = 0;
  const result = [];
  for (let move of moves) {
    switch (move) {
      case "north":
        y = y + 1;
        break;
      case "south":
        y = y - 1;
        break;
      case "east":
        x = x + 1;
        break;
      case "west":
        x = x - 1;
        break;
      default:
        console.log("Wrong direction");
    }
  }
  result.push(x);
  result.push(y);
  return result;
};

const moves = ["north", "north", "west", "west", "north", "east", "north"];
console.log(finalPosition(moves));
