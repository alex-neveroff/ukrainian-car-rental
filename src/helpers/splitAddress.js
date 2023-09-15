const splitAddress = address => {
  const splitedAddress = address.split(',');
  const [, city, country] = splitedAddress.map(item => item.trim());
  return { city, country };
};

export default splitAddress;
