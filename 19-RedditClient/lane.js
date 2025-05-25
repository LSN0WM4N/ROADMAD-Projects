import { renderApp } from './index.js';
import { LSRemoveSubreddit } from './LocalStorageManager.js';

export const Lane = ( subreddit ) => {
  const element = document.createElement('div');
  element.className = 'subreddit-lane';

   element.appendChild(LaneTitle(subreddit.title));

  subreddit.posts.forEach(({ title, ups }) => {
    const post = document.createElement('div');
    post.className = 'lane-post';

    post.appendChild(Ups(ups));
    post.appendChild(PostTitle(title));
  
    element.appendChild(post);
  });

  return element;
}

const LaneTitle = ( title ) => {
  const element = document.createElement('div');
  element.className = 'lane-header';

  const laneTitle = document.createElement('h4');
  laneTitle.className = 'subreddit-title';
  laneTitle.textContent = title;

  const trashButton = document.createElement('button');
  trashButton.className = 'trash-button';
  trashButton.textContent = '🗑';

  trashButton.addEventListener('click', () => {
    LSRemoveSubreddit(title);
    renderApp();
  });

  element.appendChild(laneTitle);
  element.appendChild(trashButton);

  return element;
}

const Ups = ( upvotes ) => {
  const element = document.createElement('p');
  element.textContent = `⮝ ${upvotes}`;
  element.className = 'upvotes';

  return element;
}

const PostTitle = ( title ) => {
  const element = document.createElement('p');
  element.textContent = title;
  element.className = 'post-title';

  return element;
}
