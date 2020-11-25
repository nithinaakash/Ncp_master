function myfunction() {
  var x, text, pass,s,d,a,f;
  text = document.getElementById("email").value;
  s=document.getElementById("name").value;
  d=document.getElementById("address").value;
  a=document.getElementById("name1").value;
  f=document.getElementById("name2").value;
  cit=document.getElementById("city").value;
  cou=document.getElementById("country").value;
  pos=document.getElementById("postal").value;
  abott=document.getElementById("abt").value;
  
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
  } else {
    alert("You have entered an invalid email address!");
  }
  if(s.length<1){
    alert("Enter Username");
  }
   if(d.length<1){
    alert("Enter Address");
  }
  if(a.length<1){
    alert("Enter Firstname");
  }if(f.length<1){
    alert("Enter Lastname");
  }

  if(document.getElementById("cars").value == "")
   {
      alert("Please select education category"); // prompt user
      document.getElementById("cars").focus(); //set focus back to control
      
   }
  if (pos.length !=6) {
    alert("your postal should be of 6 digits");
  }
  if(abott.length<1){
    alert("write something about yourself");
  }

 
  
  return true
  
}