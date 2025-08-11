let userContainer = document.querySelector(".user-container");
let registerForm = document.querySelector(".register");
let nameInput = document.querySelector(".name");
let userNameInput = document.querySelector(".username")
console.log(userContainer);


function getUsersData(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json()      // to convert to json & return promise
    })
    .then((data)=>{
        console.log(data);
        data.forEach(user=>{
            displayUsers(user);
        })
       
    })
    .catch((err)=>{
        console.log(err);
    })
}

function addUser(name,username,URL){
    let data = {
        name:name,
        username:username
    }
    fetch(URL,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
         if(data.success){
        window.alert(data.message);
            nameInput.value = "";
            userNameInput = "";
        }
        else{
            alert(data.err);
             nameInput.value = "";
             userNameInput = "";
        }
    }).catch((error)=>{
        console.log(error);
    })
}
function displayUsers(users){
    let li = document.createElement("li");
    li.setAttribute("class", "user-item");
    li.innerHTML = `<div class="userInfo">
                <h1> ${users.name}</h1>
                <p>${users.username}</p>
            </div>
            <div class="userButton">
                <button class="user-delete">Delete</button>
                <button class="user-edit">Edit</button>
            </
            div>`

            userContainer.appendChild(li);
}
getUsersData("http://localhost:3000/users");
registerForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = nameInput.value;
    let username = userNameInput.value;
    addUser(name,username,"http://localhost:3000/addusers");
})
