const formatCurrency = (amount) => {
  let currencyString =
    "$" +
    amount
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (amount < 0) {
    currencyString = currencyString.replace("$-", "-$");
  }

  return currencyString;
};

export default formatCurrency;
