
let localInforma = JSON.parse(localStorage.getItem("userInfo"));
console.log(localInforma)
console.log(localInforma[0].email)
function toogle(){
   if (password.type === "password"){
       password.type = "text"
   }else{
       password.type = "password";
   }
}


function sub(){
   let loginInfo = {
     name: usernameone.value,
     email:email.value ,
     password : password.value,
           }
   if (usernameone.value == "" || password.value == "" || email.value == ""){
       alert("input field can not be  empty")
   } else if(password.value.length < 8){
       alert("password is too short")
   }else if( loginInfo.name !== localInforma[0].name ||  loginInfo.password !== localInforma[0].password ||  loginInfo.email !== localInforma[0].email ){
       alert("User not found")
   }else{
       loading.style.display = "block",
         setTimeout(()=>{
           loading.style.display = "none"
           window.location.href = "dashboard.html"
},5000)
   }
}