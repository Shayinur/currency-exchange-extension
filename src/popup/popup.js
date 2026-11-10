async function loadRate(from, elementId) {
  const response = await fetch("https://api.frankfurter.dev/v1/latest?from=" + from + "&to=CAD");
  const data = await response.json();
  const rate = data.rates.CAD;
  document.getElementById(elementId).textContent = "1 " + from + " = " + rate + " CAD";
}

loadRate("THB", "thb-cad");
loadRate("CNY", "cny-cad");
