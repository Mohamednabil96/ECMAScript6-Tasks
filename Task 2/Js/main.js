//Task 1 Promises
let tabContainer = document.getElementById('tab-container');
let postsOfUser = document.getElementById('postsOfUser');

function createTab(user) {
  let tab = document.createElement('button');
  tab.textContent = user.name;
  tab.className = 'btn btn-primary m-2';
  tabContainer.appendChild(tab);
  tab.addEventListener('click', () => getPosts(user.id));
}

//a 
function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      users.forEach(createTab);
    })
    .catch(error => console.log(error)) 
}

//b
async function getPosts(userId) {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  let posts = await res.json();
  displayPosts(posts); 
}

function displayPosts(posts) {
  let postTitles = posts.map(post => post.title).join('<br><br>');
  postsOfUser.innerHTML = postTitles; 
}

getUsers();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 2 Display Different shapes 

class Shape {
constructor (){
  this.area = 0
  this.parameter = 0
}
toString(){
  console.log(`Area : ${this.area}, Parameter : ${this.parameter}`) 
}
}

class Rectangle extends Shape{
  constructor (width, height){
    super();
    this.height =height;
    this.width = width;
    this.area = this.calculateArea();
    this.parameter = this.calculateParameter();
  }
  calculateArea(){
    return this.height*this.width;
  }
  calculateParameter(){
    return 2* (this.width + this.height)
  }

}

class Square extends Shape{
  constructor (side){
    super();
    this.side =side
    this.area = this.calculateArea();
    this.parameter = this.calculateParameter();
  }
  calculateArea(){
    return this.side*this.side;
  }
  calculateParameter(){
    return 4* (this.side)
  }
}

class Circle extends Shape{
  constructor (radius){
    super();
    this.radius = radius
    this.area = this.calculateArea();
    this.parameter = this.calculateParameter();
  }
  calculateArea(){
    return Math.PI*this.radius*this.radius
  }
  calculateParameter(){
    return 2*Math.PI*this.radius
  }
}

const rectangle = new Rectangle (5,10)
console.log(rectangle.toString());


const square = new Square (5)
console.log(square.toString());


const circle = new Circle (5)
console.log(circle.toString());




