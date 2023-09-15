const digitSeparator = number => {
  const numberString = number.toString().split('');
  if (numberString.length <= 3) {
    return numberString.join('');
  }
  numberString.splice(numberString.length - 3, 0, ',');

  return numberString.join('');
};

export default digitSeparator;
