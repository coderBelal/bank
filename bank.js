//login button
const loginBtn = document.getElementById("log-in");
loginBtn.addEventListener("click", function () {
  const page = document.getElementById("log-page");
  page.style.display = "none";
  const tarnArea = document.getElementById("tarn-area");
  tarnArea.style.display = "block";
});

//deposit button
const deposit = document.getElementById("deposit");
deposit.addEventListener("click", function () {
  const depositNum = getInputText("depositAmount");

  updateSpanText("currentDeposit", depositNum);
  updateSpanText("Balance", depositNum);

  document.getElementById("depositAmount").value = "";
});
//withdraw button//
const WithdrawBtn = document.getElementById("addWithdraw");
WithdrawBtn.addEventListener("click", function () {
  const withdrawNum = getInputText("withdrawAmount");
  updateSpanText("withdraw", withdrawNum);
  updateSpanText("Balance", -1 * withdrawNum);
  document.getElementById("withdrawAmount").value = "";
});

function getInputText(id) {
  const withdrawAmount = document.getElementById(id).value;
  const withdrawNum = parseFloat(withdrawAmount);
  return withdrawNum;
}

function updateSpanText(id, depositNum) {
  const currentBalance = document.getElementById(id).innerText;
  const current = parseFloat(currentBalance);
  const total = depositNum + current;
  document.getElementById(id).innerText = total;
}
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
