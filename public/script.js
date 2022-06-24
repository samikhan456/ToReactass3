$(document).on("click", ".action-buttons .dropdown-menu", function(e){
	e.stopPropagation();
});
function messageFunction() {
    alert("Sign up with us for future updates and much more");
  }
  (function() {
    'use strict';
    window.addEventListener('load', function() {
     
      var forms = document.getElementsByClassName('needs-validation');
       {
        form.addEventListener('submit', function(event) {
         
          form.classList.add('was-validated');
        }, false);
      };
    }, false);
  })();
  function validation(){
    var input_text = document.querySelector("#input_text");
    var input_password = document.querySelector("#input_password");
    var error_msg = document.querySelector(".error_msg");
  
    if(input_text.value.length <= 3 || input_password.value.length <= 3 ){
      error_msg.style.display = "inline-block";
      input_text.style.border = "1px solid #f74040";
      input_password.style.border = "1px solid #f74040";
      return false;
    }
    else{
      return true;
    }
    
  }