const x = document.getElementById('f1');
const y = document.getElementById('f2');
var presentform=y;
// Function to swap form




// function to unfade form

var fm=document.getElementById('mf');
unfade(fm);
function unfade(element) {
    let op = 0.01;  // initial opacity
    element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

//functions to validate each field in login form
const pass_reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let username=y.username;  
let password=y.password;

username.addEventListener('input', validatelogin);
password.addEventListener('input', validatelogin);

function validatelogin (e) {
  if (e.target.name == "password") {
   if (pass_reg.test(e.target.value)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
   } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
   }
  }
  
  if (e.target.name == "username") {
   if (e.target.value.length > 3) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
   } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
   }
  }
 }

//functions to validate all field in login form
 function fullvalidatelogin()
 {var l=y.getElementsByTagName("input");
 var validate=true;
 for(i=0;i<l.length;i++)
 {if(l[i].classList[1] !== "valid")
 {  alert( "Invalid "+l[i].name );
   validate=false;
 }

 }

 console.log(validate);
 return validate;
 }

//functions to validate each field in sign up form
const email_reg1 = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(gmail|yahoo|hotmail|outlook)([\.])com/g;
const email_reg2 = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(cb|am|bn)\.(students)([\.])amrita\.edu/g;


var email=x.email;
var uname=x.uname;
var pass=x.pass;
var repass=x.repass;
var dob=x.dob;
var l2=[email,uname,pass,repass,dob];

// let mark12=x.mark12;
// let opmark=x.optmark;
// let clggpa=x.clggpa;
// let degree=x.degree;
// let major=x.major;
// let country=x.country;
// let resume=x.resume;
// let gender=x.optradio;
// let name=x.name;



repass.addEventListener('input', validatesignup);
pass.addEventListener('input', validatesignup);
uname.addEventListener('input', validatesignup);
email.addEventListener('input', validatesignup);
dob.addEventListener('input', validatesignup);


function validatesignup (e) {
  if (e.target.name == "pass") {
   if (pass_reg.test(e.target.value)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
   } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
   }
  }

  if(e.target.name=="dob")
  {
    var d = new Date();
    var user =e.target.value;
    var user_dob= new Date(user);
    var y=user_dob.getFullYear();
    if(d.getFullYear()-y >=18)
    {e.target.classList.add('valid');
    e.target.classList.remove('invalid');
   
   } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
    alert("Age should be above 18")
   }
  }
  
  if (e.target.name == "uname") {
   if (e.target.value.length > 3) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
   } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
   }
  }

  if (e.target.name == "repass") {
   
    if (x.repass.value === x.pass.value) {
     e.target.classList.add('valid');
     e.target.classList.remove('invalid');
    } else {
     e.target.classList.add('invalid');
     e.target.classList.remove('valid');
    }
   }
 
   if (e.target.name == "email") {
    if (email_reg1.test(e.target.value) || email_reg2.test(e.target.value)) {
     e.target.classList.add('valid');
     e.target.classList.remove('invalid');
    } else {
     e.target.classList.add('invalid');
     e.target.classList.remove('valid');
    }
   }


 }

 function checkit()
 {
   if(x.mark12.value > 10)
   
   {alert("CGPA can't be greater than 10");
   document.getElementById("percentage").checked=true;}
 }

 //functions to validate all field in student signup form
 function fullvalidatesignup()
 {validate=true;
 for(i=0;i<l2.length;i++)
 {if(l2[i].classList[1] !== "valid")
 { if(l2[i] === repass)
 alert("Password Mismatch");
 else 
   alert( "Invalid "+l2[i].name );
   validate=false;
   break;
 }

 }

 console.log(validate);
 if(validate)
 {
   document.getElementById("successmsg").innerHTML="SUCCESSFULLY CREATED AN ACCOUNT";
 }
 }
  


  //functions to validate all field in Company signup form
  function fullvalidatesignupforcompany()
  {validate=true;
  for(i=0;i<l2.length;i++)
  {if(l2[i].classList[1] !== "valid")
  { if(l2[i] === repass)
  alert("Password Mismatch");
  else 
    alert( "Invalid "+l2[i].name );
    validate=false;
    break;
  }
 
  }
 
  console.log(validate);
  if(validate)
  {
    document.getElementById("successmsg").innerHTML="SUCCESSFULLY CREATED AN ACCOUNT";
  }
  }