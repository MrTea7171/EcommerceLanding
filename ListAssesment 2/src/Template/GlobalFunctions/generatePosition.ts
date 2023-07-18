export const getRandomNumber = () => {
  const random = Math.random();
  return random < 0.5 ? 6 : 9;
};
