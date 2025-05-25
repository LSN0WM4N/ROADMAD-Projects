export const fetchData = async ( subreddit ) => {
  if (!navigator.onLine) {
    return {'error': "You are not online"};
  }

  try {
    const resp = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const { data } = await resp.json();

    const posts = data.children.map(({ data }) => {
      return {
        title: data.title,
        ups: data.ups,
      }
    });

    return {posts};
  } catch (err) {
    console.error(err);
    return {'error': err.toString()};     
  } 
}

export const pingRequest = ( subreddit ) => {
   if (!navigator.onLine) {
    return {'error': "You are not online"};
  }

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(() => true)
    .catch(() => false);
}
