const API_URL = 'http://localhost:3000/api/v1/posts'

function getPosts() {
  return fetch(API_URL)
  .then((response) => response.json())
}

module.exports = getPosts;