const baseUrl = 'http://react-todo-api/items/';

export default function(url, options = {}, base = baseUrl) {
  return fetch(base + url, options).then(response => {
    
    if (response.status !== 200) {
      return response.text(error => {
        throw new Error(error);
      })
    }

    return response.json();

  }).catch(err => {
    console.warn(err);
  })
}