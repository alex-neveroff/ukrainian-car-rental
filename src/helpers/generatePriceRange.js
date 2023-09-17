const generatePriceRange = array => {
  const priceMin = Math.ceil(Math.min(...array) / 10) * 10;
  const priceMax = Math.ceil(Math.max(...array) / 10) * 10;
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
