// new Promise((resolve, reject) => {
    //     resolve(resolveParameter)
    // })
    let mainContainer = document.getElementById("main-container");
    
    let usersvar;
    
    
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    }) 
    .then((users) => {
        console.log(users)
        usersvar = users
        usersvar.forEach((user) => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user-div");
            userDiv.innerHTML += `
            <h3 class="name">${user.name}</h3>
            <img class="img" src="https://thispersondoesnotexist.com">
            <p class="userName">${user.username}</p>  
            <p class="email">${user.email}</p> 
            <button onclick=openPostModal(${user.id})>post</button>
            `;
            
            
            // userDiv.style.backgroundColor= "lightblue"
            mainContainer.append(userDiv)
        });
        }
    )
    .catch((error) => {
        console.log(error)
    })

    console.log(usersvar)
// async - await verzió

// async function printAllUsers() {
//     try{
    //    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    //    const users = await response.json();
    
    //    console.log(users)
    //     }catch(err) {
        //         console.log(err)
        //     }
        // }
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
span.onclick =  function() {
     modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
}
function openPostModal(userId){
    modal.style.display = "block";

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) =>  response.json()) 
    .then((posts) => {
        const modalText = document.getElementById("modal-text");
        posts.forEach((post) => {
            modalText.insertAdjacentHTML(
                "beforeend",
               `<h2>${post.title}</h2>  
               <p>${post.body}</p>  
               `
                )
        })
       })
}