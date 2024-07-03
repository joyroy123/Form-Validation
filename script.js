function validation(){
   let a= document.getElementById("r1");
   let b= document.getElementById("r2");
   let c= document.getElementById("r3");
   let d= document.getElementById("r4");

   let username= document.getElementById("username").value;
   let email= document.getElementById("email").value;
   let password= document.getElementById("password").value;
   let cPassword= document.getElementById("cPassword").value;
    
   
   let user_records = new Array();
   user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
   if(user_records.some((v)=>{
    return v.email==email;
   })){
    alert("Duplicate Date");
   }else{
    user_records.push({
        "username":username,
        "email":email,
        "password":password,
        "cPassword":cPassword
    })
    localStorage.setItem("users",JSON.stringify(user_records));
   }

//    localStorage.setItem("Username", username);
//    localStorage.setItem("Email", email);
//    localStorage.setItem("Password", password);
//    localStorage.setItem("Confirm Password", cPassword);

    if(username==""){
        a.innerHTML="Username Can not be empty";
        return false;
    }else if(username.length<6){
        a.innerHTML="Atleast Six letter";
        return false;
    }else if(email==""){
        a.innerHTML="";
        b.innerHTML="Provide your email";
        return false;
    }
    else if(password==""){
        b.innerHTML="";
        c.innerHTML="Fill the password";
        return false;
    }
    else if(cPassword==""){
        c.innerHTML="";
        d.innerHTML="Fill the password";
        return false;
    }
    else if(cPassword !== password){
        d.innerHTML="Do not match the password";
        return false;
    }
    else if(password == cPassword){
        d.innerHTML="";
        popup.classList.add("open-slide");
        return false;
    }

}

let popup = document.getElementById('popup');
function closeSlide(){
    popup.classList.remove("open-slide");
}

function validation1(){
    let x= document.getElementById("r5");
    let y= document.getElementById("r6");
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;

    let user_record = new Array();
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(user_record.some((v)=>{
    return v.email==email && v.password==password;
    })){
    alert("Login Successfully");
    let current_user=user_record.filter((v)=>{
        return v.email==email && v.password==password;
    })[0]
    localStorage.setItem("username", current_user.username);
    localStorage.setItem("email", current_user.email);
    // localStorage.setItem("password", current_user.password);
    // localStorage.setItem("cPassword", current_user.cPassword);
    window.location.href="profile.html";
    }else{
    alert("Login Failed");
    }



    if(email==""){
        x.innerHTML="Provide your email";
        return false;
    }
    else if(password==""){
        x.innerHTML="";
        y.innerHTML="Fill the password";
        return false;
    }
}

 //document.write(localStorage.getItem("username"));
 //document.write(localStorage.getItem("email"));


function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    window.location.href="login.html"
}
