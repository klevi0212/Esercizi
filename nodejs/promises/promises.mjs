// The luckyDraw function returns a promise.
// Create a promise chain where the function is called for for each of the players: Joe, Caroline and Sabrina
// Log out the resolved value for each promise and handle any promise rejections in the chain.

import { error } from "console";

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));
    process.nextTick(() => {
      //process.nextTick() is a method used to schedule a callback function to be executed in the next iteration of the event loop, before any I/O operations or timers. It allows you to prioritize certain operations over others, ensuring they are executed as soon as possible after the current operation completes.
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
const player1 = "Joe";
const player2 = "Caroline";
const player3 = "Sabrina";
luckyDraw(player1)
  .then((player1) => {
    console.log(player1);
    return luckyDraw(player2);
  })
  .catch((error) => {
    console.log(error);
  })
  .then((player2) => {
    console.log(player2);
    return luckyDraw(player3);
  })
  .catch((error) => {
    console.log(error);
  })
  .then((player3) => {
    console.log(player3);
  })
  .catch((error) => {
    console.log(error);
  });
