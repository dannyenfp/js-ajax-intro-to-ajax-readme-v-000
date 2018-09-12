function showRepositories() { 
  //Since when we call showRepositories in our callback function, we have it 
  
  console.log(this.responseText);
} 

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}  


