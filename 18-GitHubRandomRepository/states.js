import { createNode } from './utils.js'; 
import { StarEmoji, ForksEmoji, IssuesEmoji } from './emojis.js'

export const SelectState = () => {
  const element = createNode('text-status', 'Please select a language');
  return element;
}

export const LoadingState = () => {
  const element = createNode('text-status', 'Loading, please wait...');
  return element;
}

export const ErrorState = () => {
  const element = createNode('text-status error-status', 'Error fetching repositories');

  return element;
}

export const InfoStatus = ( repoData ) => {
  const element = createNode("repo", "");
  
  const repoTitle = createNode('repo-title', `<a href=${repoData.html_url} target=_blank>${repoData.full_name}</a>`);
  const description = createNode('repo-description', repoData.description ?? "No description");
  const info = createNode('repo-info');

  const lang = createNode('repo-info-lang', `<div className='lang ${repoData.language}'></div> ${repoData.language}`);
  const stars = createNode('repo-info-stars', `${StarEmoji} ${repoData.stargazers_count}`);
  const forks = createNode('repo-info-forks', `${ForksEmoji} ${repoData.forks_count}`);
  const issues = createNode ('repo-info-issues', `${IssuesEmoji} ${repoData.open_issues_count}`);

  info.appendChild(lang);
  info.appendChild(stars);
  info.appendChild(forks);
  info.appendChild(issues);

  element.appendChild(repoTitle);
  element.appendChild(description);
  element.appendChild(info);

  return element;
}

export const SetState = ( state, repoData ) => {
  const stateElement = document.querySelector('#state');

  while (stateElement.firstChild)
    stateElement.removeChild(stateElement.firstChild);

  switch (state) {
    case 'loading':
      stateElement.appendChild(LoadingState());
      break;
    case 'select':
      stateElement.appendChild(SelectState());
      break;
    case 'error':
      stateElement.appendChild(ErrorState());
      break;
    case 'info':
      stateElement.appendChild(InfoStatus(repoData));
      break;
  }
}
