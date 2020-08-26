(function () {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2020, 8, 29);
  const secondDate = new Date(2020, 8, 26);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  document.querySelector(
    '.main'
  ).innerHTML = `Number of Days Remaining : ${diffDays}`;
})();
