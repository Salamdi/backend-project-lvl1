const randomNumber = (max = 1000, min = 0) => {
  const rand = Math.floor(Math.random() * max + min);

  return rand;
};

export default {
  randomNumber,
};
