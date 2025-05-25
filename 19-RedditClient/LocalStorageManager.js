const subredditsVar = 'subredditArray';

export const LSGetSubreddits = () => {
  const subreddits = localStorage.getItem(subredditsVar);

  if (!subreddits)
    return [];

  return subreddits.split(',');
}

export const LSAddSubreddit = ( subreddit ) => {
  console.log('Entra en la funciona con -> ', subreddit);

  const subreddits = [...LSGetSubreddits(), subreddit];
  console.log('Estos son subreddits => ', subreddits);
  localStorage.setItem(subredditsVar, subreddits);
}

export const LSRemoveSubreddit = ( subreddit ) => {
  console.log('subreddit', subreddit);
  const subreddits = LSGetSubreddits().filter((element) => element != subreddit);

  localStorage.setItem(subredditsVar, subreddits);
}
