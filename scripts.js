function displayResult() {
  const currency1 = document.querySelector("#from").value;
  const currency2 = document.querySelector("#to").value;
  const quantity = document.querySelector("#quantity").value;
  const result = document.querySelector("#result");
  if (quantity === "") {
    alert("Invalid input");
    return;
  }
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency1.toLowerCase()}/${currency2.toLowerCase()}.json`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      value = response[currency2.toLowerCase()];
      result.textContent = `${numberWithCommas(
        quantity
      )} ${currency1} is worth ${
        quantity * value < 100
          ? quantity * value
          : numberWithCommas(Math.round(quantity * value))
      } ${currency2}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
