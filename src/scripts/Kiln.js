export const firePottery = (pot, temp) => {
  let pottery = {
    ...pot,
    fired: true,
    cracked: temp > 2200 ? true : false,
  };
  return pottery;
};
