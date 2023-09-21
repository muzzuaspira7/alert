let userName = document.getElementById("Name")
let NameErr = document.getElementById('NameError')

let email = document.getElementById("Email")
let EmailErr = document.getElementById("EmailError")

let CreatePass = document.getElementById("CreatePass")
let PassErr1 = document.getElementById("PassError1")

let ConfirmPassword = document.getElementById("ConfirmPass")
let PassErr2 = document.getElementById("PassError2")

let button = document.getElementById("Submit")

button.addEventListener("click", ()=>{

    let emailvalidate ="@"
    if(userName.value=="" || email.value=="" || CreatePass.value=="" || ConfirmPassword.value != CreatePass.value){

    
    if(userName.value==""){
        NameErr.innerHTML="Please Enter Your Name"
        NameErr.style.color="red"
    }else{
        NameErr.innerHTML= "Enter Your Name"
        NameErr.style.color="white"
    }
    
    if(email.value.match(emailvalidate)){
        EmailErr.innerHTML= "Enter Email Address"
        EmailErr.style.color="white"
    }else{
        
        EmailErr.innerHTML="Please Enter Your Email Id"
        EmailErr.style.color="red"
    }
    if(CreatePass.value == ""){
        PassErr1.innerHTML = "Create a Strong Password"
        PassErr1.style.color="red"
    }else{
        PassErr1.innerHTML = "Create New Password"
        PassErr1.style.color="white"
    }

    if(ConfirmPassword.value == ""){
        PassErr2.innerHTML = "Create a Strong Password"
        PassErr2.style.color="red"
    }else{
        PassErr2.innerHTML = "Confirm Password"
        PassErr2.style.color="white"
    }


    if(ConfirmPassword.value == CreatePass.value ){
        PassErr2.innerHTML = "Confirm Password"
        PassErr2.style.color="white"
    }
    else{
        PassErr2.innerHTML = "Confirm Password Not Match"
        PassErr2.style.color="red"
        
    }
} else {
    alert("Form Submitted successfully")
}
    


})



userName.addEventListener("focus",()=>{
    NameErr.innerHTML= "Enter Your Name"
        NameErr.style.color="#2f2c2c"       
})

email.addEventListener("focus",()=>{
    EmailErr.innerHTML= "Enter Email Address"
    EmailErr.style.color="#2f2c2c"       
})

CreatePass.addEventListener("focus",()=>{
    PassErr1.innerHTML= "Create New Password"
    PassErr1.style.color="#2f2c2c"       
})

ConfirmPassword.addEventListener("focus",()=>{
    PassErr2.innerHTML= "Confirm Password"
    PassErr2.style.color="#2f2c2c"       
})


