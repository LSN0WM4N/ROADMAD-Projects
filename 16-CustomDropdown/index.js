document.addEventListener('DOMContentLoaded', () => {

  const dropdown = document.querySelector('.dropdown-menu');
  const button = dropdown.querySelector('.dropdown-button');
  const items = dropdown.querySelectorAll('.dropdown-item');

  button.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      button.textContent = item.textContent;
      dropdown.classList.remove('show');
    })
  })
});
