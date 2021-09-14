function testing(e){
  // var lastName = document.getElementById("lname").value;
  var firstName = document.getElementById("fname").value;
  var message = document.querySelector(".msg");
  var emailA = document.getElementById("email").value;
  var message1 = document.querySelector(".msg1");
  var pass = document.getElementById("password").value;
  var cpass = document.getElementById("cpassword").value;
  var message2 =document.querySelector(".msg2");
  var message3 =document.querySelector(".msg3");

  // var nameInput = document.querySelector('input[name="name"]');
  // alert("Enter your first name and last name".concat(firstName));
  if(firstName == null || firstName=="" || firstName.length < 1) {
      message.innerHTML = "Your name is required";
      document.getElementById("fname").classList.add('invalid');
      // return false;
  } 
  else {
      document.getElementById("fname").classList.remove('invalid');
      message.innerHTML = "";
  }

  if(emailA=="" || emailA==null || emailA.length < 1){
      message1.innerHTML = "Enter email address";
      document.getElementById("email").classList.add('invalid');
      // document.getElementById("lname").classList.add('invalid');
      // return false;

      // setTimeout(() => message.remove(), 5000);
  }
  else{
      document.getElementById("email").classList.remove('invalid');
      message1.innerHTML = "";
      }
  if(pass==""||pass==null || pass.length<8){
      message2.innerHTML="Password should be 8 characters";
      document.getElementById("password").classList.add('invalid');
      }
      else{
          message2.innerHTML = "";
          document.getElementById("password").classList.remove('invalid');
      }
  if(cpass==""||cpass==null){
          message3.innerHTML = "fill in this field please";
          document.getElementById("cpassword").classList.add('invalid');
          return false;
      }
      else{
          message3.innerHTML = "";
          document.getElementById("cpassword").classList.remove('invalid');
      }
  if(pass.length!=cpass.length){
      message2.innerHTML="passwords do not match";
      document.getElementById("cpassword").classList.add('invalid');
      document.getElementById("password").classList.add('invalid');
      return false;
      // return false;
  }
  else{
      message1.innerHTML = "";
      message2.innerHTML = "";
      document.getElementById("password").classList.remove('invalid');
      document.getElementById("cpassword").classList.remove('invalid')
      // return true;
  }
  }