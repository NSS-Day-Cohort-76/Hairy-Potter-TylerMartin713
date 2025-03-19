const potCatalog = [];

export const toSellOrNotTOSell = (pot) => {
  if (pot.cracked) {
    return pot;
  }
  if (pot.weight >= 6) {
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
