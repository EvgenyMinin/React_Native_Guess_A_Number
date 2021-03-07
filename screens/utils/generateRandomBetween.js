export const generateRandomBetween = (min, max, exlude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exlude) {
    return generateRandomBetween(min, max, exlude);
  } else {
    return randomNumber;
  }
};
