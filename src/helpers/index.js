const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const moneyFormat = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function helperFormatMontYear(month, year) {
  return `${String(MONTHS[month - 1]).substring(0, 3)}/${year}`;
}

function helperFotmatMoney(value) {
  return moneyFormat.format(value);
}

function helperFormatPercent(value) {
  const percent = `${Number(value).toFixed(2).replace(".", ",")}%`;
  return value > 0 ? `+${percent}` : percent;
}

export { helperFormatMontYear, helperFotmatMoney, helperFormatPercent };
