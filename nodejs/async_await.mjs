// Create agetResults function that uses async and await. Inside of the function, call the luckyDraw function for each of the players:
//  Tina, Jorge, Julien

// Log out the resolved value for each promise and handle any promise rejections.

async function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  const players = ["Tina", "Jorge", "Julien"];
  for (const player of players)
    try {
      const result = await luckyDraw(player);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
}
getResults();

// gestione con promise.all
// async function getResults() {
//   const players = ["Tina", "Jorge", "Julien"];
//   const promises = players.map((player) => luckyDraw(player));

//   try {
//     const results = await Promise.all(promises);
//     results.forEach((result) => console.log(result));
//   } catch (e) {
//     console.error(e);
//   }
// }
// getResults();

// gestione con promise.allSettled
// async function agetResults() {
//   const players = ["Tina", "Jorge", "Julien"];

//   const promises = players.map((player) => luckyDraw(player));

//   const results = await Promise.allSettled(promises);

//   results.forEach((result, index) => {
//     const player = players[index];
//     if (result.status === "fulfilled") {
//       console.log(result.value);
//     } else {
//       console.error(result.reason);
//     }
//   });
// }

// agetResults();

// Metodo	             Si ferma al primo errore?     	Ricevi tutti i risultati?      	Gestione consigliata per…
// for...of + await	   No	                            Sì (uno alla volta)	            Chiamate sequenziali, controllate
// Promise.all         Sì	                            No	                            Tutte devono riuscire
// Promise.allSettled	 No	                            Sì                  	          Hai bisogno di tutti i risultati
