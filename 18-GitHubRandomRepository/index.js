import { fetchData, fetchDataOffline } from './api.js';
import { SetState } from './states.js';

document.addEventListener('DOMContentLoaded', () => {
  SetState('select');
  const refreshButtom = document.querySelector('button');
  
  refreshButtom.addEventListener('click', async () => {
    try {
      SetState('loading');
      const data = await fetchData(document.querySelector('select').value)

      console.log(data);

      if (data.error != null)
        throw new Error(data.error);

      SetState('info', data);
    } catch (error) {
      SetState('Error: ', error);
    }
  })
});
