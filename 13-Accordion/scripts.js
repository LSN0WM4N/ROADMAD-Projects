const itemArray = document.getElementsByClassName('acordeon-item');

const cleanAcordeon = () => {
  for (let i = 0; i < itemArray.length; ++i) {
    const item = itemArray[i].getElementsByClassName('acordeon-item-info')[0];
    const arrow = itemArray[i].getElementsByTagName('i')[0];
    if (!item.classList.contains('show'))
      continue;
    item.classList.remove('show');
    arrow.classList.remove('animated-arrow');
  }
}

for (let i = 0; i < itemArray.length; ++i) {
  itemArray[i].addEventListener('click', () => {
    const item = itemArray[i].getElementsByClassName('acordeon-item-info')[0];
    const arrow = itemArray[i].getElementsByTagName('i')[0];

    if (item.classList.contains('show')) {
      item.classList.remove('show');
      arrow.classList.remove('animated-arrow');
    } else {
      cleanAcordeon();
      item.classList.add('show');
      arrow.classList.add('animated-arrow');
    }
  });
}
