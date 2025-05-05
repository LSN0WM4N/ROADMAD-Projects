const RemoveCookiePopup = () => {
  document.getElementsByClassName('cookie-popup')[0]?.style.display = 'none';
}

if (localStorage.getItem('mySiteCookies') != null) {
  RemoveCookiePopup();
}

const popup = document.getElementsByClassName('cookie-popup')[0];
const acceptButtom = document.getElementById('accept-cookies');
const regectButtom = document.getElementById('regect-cookies');

acceptButtom.addEventListener('click', () => {
  RemoveCookiePopup();

  localStorage.setItem('mySiteCookies', 'true');
 
  // Handle accept cookies
});

regectButtom.addEventListener('click', () => {
  RemoveCookiePopup();

  localStorage.setItem('mySiteCookies', 'false');
  
  // Handle regect cookies
});
