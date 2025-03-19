export const firePottery = (pot, temp) => {
  let pottery = pot.map((pot) => ({
    ...pot,
    fired: true,
    cracked: temp >= 2201 ? true : false,
  }));
  return pottery;
};
