let userData = document.querySelector(".user-container");
function getUserData(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res);
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        
        data.forEach(users=>{
            displayUser(users);
        });
    })
    .catch((err)=>{
        console.log(err);
    })    
}
let url = `http://localhost:3000/users`;
getUserData(url);
function displayUser(user){
    let li = document.createElement("li");
    li.setAttribute("class","soni");
    li.innerHTML  = `<p>${user.name}</p>
                    <p>${user.id}</p>`
    userData.appendChild(li);
}