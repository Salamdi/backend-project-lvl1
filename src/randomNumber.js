const randomNumber = (min = 0, max = 1000) => {
  const rand = Math.ceil(Math.random() * max + min);

  return rand;
};

export default randomNumber;
