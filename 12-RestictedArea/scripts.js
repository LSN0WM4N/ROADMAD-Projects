const textarea = document.querySelector('.restricted-textarea');
const tCounter = document.querySelector('.textarea-counter');

const MaxCharacterCount = 250;

textarea.addEventListener('input', () => {
  console.log(textarea.value.length, MaxCharacterCount);

  textarea.value = String(textarea.value).slice(0, MaxCharacterCount);
  tCounter.textContent = `${textarea.value.length} / ${MaxCharacterCount}`;

  if (textarea.value.length >= MaxCharacterCount) {
    tCounter.classList.add('limit-counter');
    textarea.classList.add('limit-textarea');
  } else {
    tCounter.classList.remove('limit-counter');
    textarea.classList.remove('limit-textarea');
  }
});
