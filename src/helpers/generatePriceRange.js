const generatePriceRange = (priceMin, priceMax) => {
  const priceRange = ['', priceMin.toString()];

  let priceCurrent = priceMin;
  while (priceCurrent < priceMax) {
    if (priceCurrent < 200) {
      priceCurrent += 10;
    } else {
      priceCurrent += 100;
    }
    if (priceCurrent > priceMax) {
      priceCurrent = priceMax;
    }
    priceRange.push(priceCurrent.toString());
  }

  return priceRange;
};

export default generatePriceRange;
