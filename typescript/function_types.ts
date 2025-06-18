// START: Follow the instructions below.

// Add types to this function declaration.

function doubleThePopulation(value: number): number {
  return value * 2;
}
// Correct or remove the function calls which cause type errors.

doubleThePopulation(5);

doubleThePopulation(6.12);

doubleThePopulation(8_526);

// doubleThePopulation(false);

// Alter this function so the language2 parameter is optional.
// Hint: Check language2 is not undefined before passing it to console.log().

function languagesSpoken(
  country: string,
  language1: string,
  language2?: string
): void {
  console.log(`The languages spoken in ${country} are:`);

  console.log(language1);

  if (typeof language2 !== "undefined") {
    // quando usiamo il condizionale undefined lo mettiamo sempre sottoforma di stringa. Anche se dobbiamo mettere un altro valore primitivo(string, number, null ecc) bisogna smepre metterlo sotto forma di stringa.
    console.log(language2);
  } else {
    console.log("There is no second language in this Country");
  }
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");
// ----

export {};
