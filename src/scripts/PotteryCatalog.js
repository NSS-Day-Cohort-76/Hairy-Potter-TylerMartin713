const potCatalog = [];

export const toSellOrNotToSell = (pot) => {
  if (pot.cracked) {
    return pot;
    // pot.price = 2.5;
  } else if (pot.weight >= 6) {
    pot.price = 40;
  } else {
    pot.price = 20;
  }
  potCatalog.push(pot);
  return pot;
};

export const usePottery = () => {
  return structuredClone(potCatalog);
};
