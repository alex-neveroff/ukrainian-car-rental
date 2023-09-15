const isPremium = price => {
  const priceNumber = Number(price.replace('$', ''));
  return priceNumber > 40 ? 'Premium' : '';
};

export default isPremium;
