import { AddSubreddit } from './addSubreddit.js';
import { fetchData, pingRequest } from './api.js';
import { Lane } from './lane.js';
import { LSGetSubreddits, LSAddSubreddit } from './LocalStorageManager.js';


document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

export const renderApp = async () => {
  const app = document.querySelector('#app');

  const subredditArray = LSGetSubreddits();
  console.log(subredditArray);

  while (app.firstChild !== null)
    app.removeChild(app.firstChild);

  app.append(AddSubreddit());

  subredditArray.forEach((subreddit) => {
    if (subreddit == '')
      return;

    fetchData(subreddit).then( ({ posts }) => {
      if (!posts) 
        return;

      app.append(Lane({title: subreddit, posts}));
    }).catch((err) => {
      console.error(err);
    });
  });
}

document.querySelector('.find-subreddit').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('entra');
  document.querySelector('.find-subreddit').classList.toggle('hidden');
  document.querySelector('#app').classList.toggle('blur');

  const $input = document.querySelector('input[type=text]');
  const subreddit = $input.value;

  if (!subreddit)
    return;

  const subredditArray = LSGetSubreddits();

  if (subredditArray.includes(subreddit))
    return;

  if (pingRequest(subreddit)) {
    LSAddSubreddit(subreddit);
 
    $input.value = "";
  
    renderApp()
  };
});
