const filterByType = (type, priceItems, setPriceItems) => {
  switch (type) {
    case "Desc. Price": // Descending Price
      setPriceItems(priceItems.sort((a, b) => b.price - a.price));
      break;
    case "Asc. Price": // Ascending Price
      setPriceItems(priceItems.sort((a, b) => a.price - b.price));
      break;
    case "Date": // Date of item
      setPriceItems(priceItems.sort((a, b) => b.timestamp - a.timestamp));
      break;
  }
};

export default filterByType;
