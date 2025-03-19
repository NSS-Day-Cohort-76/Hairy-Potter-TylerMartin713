// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 1.5, 2.5);
const platter = makePottery("Platter", 2.5, 3.0);
const vase = makePottery("Vase", 8.0, 10.0);
const bowl = makePottery("Bowl", 5.5, 4.0);
const jar = makePottery("Jar", 7.5, 8.0);

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2205);
const firedPlatter = firePottery(platter, 2200);
const firedVase = firePottery(vase, 1999);
const firedBowl = firePottery(bowl, 1998);
const firedJar = firePottery(jar, 1999);

// Determine which ones should be sold, and their price
const sellMug = toSellOrNotToSell(firedMug);
const sellPlatter = toSellOrNotToSell(firedPlatter);
const sellVase = toSellOrNotToSell(firedVase);
const sellBowl = toSellOrNotToSell(firedBowl);
const sellJar = toSellOrNotToSell(firedJar);

// Invoke the component function that renders the HTML list
const potteryForSell = PotteryList();
document.querySelector(".potteryList").innerHTML += potteryForSell;
