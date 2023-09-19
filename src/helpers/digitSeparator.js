const digitSeparator = number => {
  const numberString = number.toString().split('');
  const length = numberString.length;
  if (length <= 3) {
    return numberString.join('');
  }

  for (let i = length - 3; i > 0; i -= 3) {
    numberString.splice(i, 0, ',');
  }

  return numberString.join('');
};

export default digitSeparator;
