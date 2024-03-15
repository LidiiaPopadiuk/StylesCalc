"use strict";

const res = document.querySelector("#result");
const canculatorClearBtn = document.querySelector(".calculator-clear-button");
const canculatorBtns = document.querySelectorAll(".calculator-button");
const equaBtn = document.querySelector(".calculator-result");

function canculator(value) {
  const canculatorValue = eval(value || null);

  //! eval - обчислює значення
  // console.log(eval(5 * 3));

  if(isNaN(canculatorValue)) {
    res.value = 'Неможливо поділити 0 на 0'
    // очищяє інпут через 1 сек
    setTimeout(() => {
      res.value = '';
    }, 1000);
  } else {
    //якщо приклад обчислеться
    res.value = canculatorValue;
  }

}

//відображає введене значення
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = ''
  }
  // res.value = res.value + enteredValue
  res.value += enteredValue
}

canculatorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.value);
    liveScreen(btn.value)
  })
  });

  equaBtn.addEventListener('click', () => {
    canculator(res.value)
  });

  canculatorClearBtn.addEventListener('click', () => {
    res.value = "";
  });