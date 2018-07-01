import axios from 'axios';

export function fetchData() {
  const request = axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story')
    
  return (dispatch) => {
    request.then(responce => {
      dispatch({ type: 'FETCH_DATA', payload: responce.data.hits, error: false })    
    });
    request.catch(error => {dispatch({ type: 'FETCH_DATA', payload: [], error: true})});
  }
}