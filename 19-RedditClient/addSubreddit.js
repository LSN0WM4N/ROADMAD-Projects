export const AddSubreddit = () => {
  const button = document.createElement('button');
  button.className = 'add-subreddit';
  button.textContent = '+';

  button.addEventListener('click', () => {
    document.querySelector('.find-subreddit').classList.toggle('hidden');
    document.querySelector('#app').classList.toggle('blur');
  });

  return button;
} 
