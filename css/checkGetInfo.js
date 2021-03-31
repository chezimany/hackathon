
function test() {
  //onsubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); return false;
  let first_name = document.getElementById("first_name_input").value;
  let last_name = document.getElementById("last_name_input").value;
  let email = document.getElementById("e-mail").value;
  let password = document.getElementById("password_input").value;
  let verify_password_input = document.getElementById("verify_password_input").value;
  let phone_number = document.getElementById("phone_number_input").value;

  let name = new RegExp(/^[A-Za-z ]+$/);
  let email_exp = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  let pwd_exp = new RegExp(/^[A-Za-z0-9]{6,}$/);
  let phone = new RegExp(/^[0-9]{9,}$/);
  let flag=true;

  if (!document.getElementById('agree').checked){
    alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy');
    flag=false;
  }
  if (!name.test(first_name)){
    alert("Invalid first name, please input only letters or whitespace :)");
    flag=false;
  }
  else if (!name.test(last_name)) {
    alert("Invalid last name, please input only letters or whitespace :)");
    flag=false;
  }
  else if (!email_exp.test(email)) {
    alert("Invalid email address, please input only legal email address :)");
    flag=false;
  }
  else if (!pwd_exp.test(password)) {
    alert("Invalid password, please input more than six letters or numbers :)");
    flag=false;
  }
  else if (verify_password_input !== password){
    alert("Password verification was failed! Please enter matching passwords :)");
    flag=false;
  }
  else if (!phone.test(phone_number)){
    alert("Invalid phone number, please input a valid number :)");
    flag=false;
  }
  if(flag){
    let url = 'mysql://admin:BraveAdmin!@brave-together-hackathon.cjndulutprva.us-east-1.rds.amazonaws.com/main';
    var request = $.ajax({
      url: url,
      method: "POST",
      data: { first_name: first_name,
              last_name: last_name,
              email:email,
              password:password,
              cellphone: phone_number},
      dataType:"json"
    });

    request.done(function( msg ) {
      console.log("success");
      console.log(msg);
    });

    request.fail(function( jqXHR, textStatus ) {
      console.log("fail");
      console.log(textStatus);
    });

    // alert
    // let url = 'mysql://admin:BraveAdmin!@brave-together-hackathon.cjndulutprva.us-east-1.rds.amazonaws.com/main/user';
    // let req = new XMLHttpRequest();
    //
    // req.open('POST', url, true);
    // req.setRequestHeader('Content-Type')
    // TODO enter to database
    // document.getElementById("main_form").innerHTML = "";
    // document.getElementById("after_sub").innerHTML = "Thank you for applying."
    // document.getElementById("after_sub2").innerHTML = "A member of our team will contact with you soon :)";
  }



}
