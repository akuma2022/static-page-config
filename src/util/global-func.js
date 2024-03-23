const getCountPage = (lenngthIteam, numSplit) => {
  const x = lenngthIteam / numSplit;
  const y = Math.round(lenngthIteam / numSplit);

  return y - x < 0 ? y + 1 : y;
};

module.exports = { getCountPage };
