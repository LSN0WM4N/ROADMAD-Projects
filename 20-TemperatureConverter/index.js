import { convertFactor } from "./utils.js";

document.addEventListener('DOMContentLoaded', () => {
  const fromInput = document.querySelector('.from-input');
  const fromUnit  = document.querySelector('.from-unit');
  const toInput   = document.querySelector('.to-input');
  const toUnit    = document.querySelector('.to-unit');

  fromInput.addEventListener('input', ({ target }) => toInput.value = convertFactor(target.value, fromUnit.value, toUnit.value));
  fromUnit.addEventListener('input', ({ target }) => toInput.value = convertFactor(fromInput.value, target.value, toUnit.value));
  toUnit.addEventListener('input', ({ target }) => toInput.value = convertFactor(fromInput.value, fromUnit.value, target.value));

  document.querySelector('button').addEventListener('click', () => {
    [fromUnit.value, toUnit.value] = [toUnit.value, fromUnit.value];
    toInput.value = convertFactor(fromInput.value, fromUnit.value, toUnit.value);
  });
});

