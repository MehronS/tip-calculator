`use strict`;

const billTotal = document.querySelector(`.bill--input`);
const allTips = document.querySelectorAll(`.tip`);
const customTip = document.querySelector(`.custom`);
const tipTotal = document.querySelector(`.tip--total`);
const total = document.querySelector(`.total`);
const pplNumber = document.querySelector(`.people--input`);
const btnReset = document.querySelector(`.reset--btn`);

// Functions

const tip = function (amount) {
  if (billTotal.value !== ``) {
    tipTotal.textContent =
      `$` + (((amount / 100) * billTotal.value) / pplNumber.value).toFixed(2);
  }
};

const totalPerPerson = function () {
  total.textContent =
    `$` +
    (
      Number(tipTotal.textContent.slice(1)) +
      billTotal.value / pplNumber.value
    ).toFixed(2);
};

// Event listeners

// Tips
allTips.forEach((btn) =>
  btn.addEventListener(`click`, function () {
    tip(btn.id);
    totalPerPerson();
  })
);

// Custom Tip
customTip.addEventListener(`keypress`, function (e) {
  if (e.key === `Enter`) {
    tip(Number(customTip.value));
    totalPerPerson();
  }
});

// Reset
btnReset.addEventListener(`click`, function () {
  billTotal.value = 0;
  pplNumber.value = 1;
  tipTotal.textContent = `$` + 0.0;
  total.textContent = `$` + 0.0;
  customTip.value = ``;
});
