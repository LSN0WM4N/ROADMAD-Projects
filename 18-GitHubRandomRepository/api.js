import { Rand, getRandomCode } from './utils.js';

export const fetchData = async ( lang ) => {
  if (!navigator.onLine) {
    throw new Error('No internet connection');
  }

  try {
    const response = await fetch(`https://api.github.com/search/repositories?q=${getRandomCode()}+language:${lang}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });
   
    if (!response.ok) 
      throw new Error(`Error fetching data: ${response.status}`);
  
    const data = await response.json();
    const items = data.items || [];

    console.log(items);

    if (items.length == 0) 
      throw new Error('Something went wrong');

    return items[Rand(items.length)];

  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
} 

export const fetchDataOffline = () => {
  return {
    "id": 63619929,
    "full_name": "vfleaking/uoj",
    "html_url": "https://github.com/vfleaking/uoj",
    //"description": "Universal Online Judge",
    "stargazers_count": 536,
    "language": "JavaScript",
    "forks_count": 110,
    "open_issues_count": 30,
  }
}


