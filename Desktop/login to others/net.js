let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let loading = document.getElementById("loading")
let userInfo = [

]
function toogle(){
    if (password.type === "password"){
        password.type = "text"
    }else{
        password.type = "password";
    }
}
function toogla(){
    if (confirmpassword.type === "password"){
        confirmpassword.type = "text"
    }else{
        confirmpassword.type = "password";
    }
}
     function sub(){
        if (username.value == "" || password.value == "" || email.value == ""){
        alert("input field can not be  empty")
        }else if(password.value.length < 8){
        alert("password is too short")
    }else if(password.value !== confirmpassword.value){
        alert("password do not match")
    }else{
        
  let info = {
      name: username.value,
      email:email.value ,
      password : password.value,
      confirmpassword: confirmpassword.value
            }
      userInfo.push(info)
console.log(info)
    console.log(password.value.length)
    console.log(userInfo)

       
        loading.style.display = "block";
         setTimeout(function() {
            loading.style.display = "none";
            window.location.href = "login.html"
        }, 3000);
    }
    let stringArray = JSON.stringify(userInfo);
   localStorage.setItem("userInfo", stringArray);
    
}
