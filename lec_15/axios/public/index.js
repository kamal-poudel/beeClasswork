console.log(axios);
async function getComment(URL){
    // axios.get(URL).then((data)=>{
    //     console.log(data);
    // }).catch((err)=>{
    //     console.log(err);
    // })
    try{
        let data = await axios.get(URL);
         console.log(data);
    }catch(err){
        console.log(err);
    }
    
    
}
let url = `https://jsonplaceholder.typicode.com/comments`
getComment(url)
// function to add new blog
async function addBlog(URL,title,description){
    try{
    let newBlog={
        title:title,
        description:description
    }
    let response = await axios.post(URL,newBlog);
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
}
addBlog("http://localhost:3000/blog","first blog","hi i am soni")