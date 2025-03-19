// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
// Make 5 pieces of pottery at the wheel

// let pottery = [
//   makePottery("Mug", 0.5, 2.5),
//   makePottery("Platter", 1.5, 1.0),
//   makePottery("Vase", 2.0, 10.0),
//   makePottery("Bowl", 2.0, 1.0),
//   makePottery("Jar", 4.5, 8.0),
// ];

const mug = makePottery("Mug", 0.5, 2.5);

const platter = makePottery("Platter", 1.5, 1.0);

const vase = makePottery("Vase", 2.0, 10.0);

const bowl = makePottery("Bowl", 2.0, 4.0);

const jar = makePottery("Jar", 4.5, 8.0);

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2205);
console.log(...firedMug);

const firedPlatter = firePottery(platter, 2200);
console.log(...firedPlatter);

const firedVase = firePottery(vase, 1999);
console.log(...firedVase);

const firedBowl = firePottery(bowl, 2204);
console.log(...firedBowl);

const firedJar = firePottery(jar, 1999);
console.log(...firedJar);

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
