/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['raberin','PCDSandwichMan', 'ethyl2','phil-mac','web25Lucius', 'lyndsiWilliams', 'joshhill15', 'nasraaden', 'KaiHaskell', 'caleballard', 'cstewart94', 'EricFerguson76', 'bseverino', 'leachcoding', 'javish88', 'crutledgedev', 'TheNativeDev', 'ElliotPhipps', 'CoBe18', 'dijahdeen'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
// const obj = document.querySelector('.cards')
// followersArray.forEach(info => {
//   obj.appendChild(createCard(info));
// })
   
    // obj.appendChild(card);
    // card.append(cardImg, cardInfo, nameH3, user, locate, prof, fans, heroes, ego);

    //Set class names
  
  // }

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

axios
.get('https://api.github.com/users/Gremlin4544')  //gets the info from the api
.then((response) => {
  console.log(response);
  createCard(response);
})
//can also be written .then(response => { console.log(response.data.message)})


.catch((err) => {
  console.log(err);
});
//can also be written .catch(error => { console.log("data not returned", error)})

  
  followersArray.forEach(follower => {
    axios
    .get(`https://api.github.com/users/${follower}`)
    .then((response) => {

    createCard(response);

  })
})

// imgsrc, name, username, location, profile, followers, following, bio

//Define functional component here

function createCard(item) {

  //Define new elements
  // instead of wrintg const for multiple variables - you can add a comma to the end of each variable line

  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameH3 = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('url');
  const gHubAddy = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //Setup structure of elements

  // card.appendChild(cardImg);
  // card.appendChild(cardInfo);
  // cardInfo.appendChild(nameH3);
  // cardInfo.appendChild(username);
  // cardInfo.appendChild(location);
  // cardInfo.appendChild(profile);
  // profile.appendChild(gHubAddy)
  // cardInfo.appendChild(followers);
  // cardInfo.appendChild(following);
  // cardInfo.appendChild(bio);
  


  //Set class names

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameH3.classList.add('name');
  username.classList.add('username');

  //Set text content

  cardImg.src = item.data.avatar_url;
  nameH3.textContent = item.data.name;
  username.textContent = item.data.login;
  location.textContent = 'Location: ' + item.data.location;
  profile.textContent = `Profile: `;
  gHubAddy.setAttribute('href', item.data.html_url);
  gHubAddy.textContent = item.data.html_url;
  followers.textContent = 'Followers: ' + item.data.followers;
  following.textContent = 'Following: ' + item.data.following;
  bio.textContent = 'Bio: ' + item.data.bio;    
  console.log(gHubAddy);

   //Setup structure of elements

   card.appendChild(cardImg);
   card.appendChild(cardInfo);
   cardInfo.appendChild(nameH3);
   cardInfo.appendChild(username);
   cardInfo.appendChild(location);
   cardInfo.appendChild(profile);
   profile.appendChild(gHubAddy)
   cardInfo.appendChild(followers);
   cardInfo.appendChild(following);
   cardInfo.appendChild(bio);
  
   
  document.querySelector('.cards').appendChild(card);
  
  return card;
}
