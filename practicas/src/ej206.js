const getPlayersOrder = (players, turns) => {
  for (let index = 0; index < turns; index++) {
    [first, ...others] = players;
    players = [...others, first];
  }
  return players;
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]