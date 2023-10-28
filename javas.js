console.log("Hello World");

function validateimg()
        {
            var allowedExtension = ['jpeg', 'jpg', 'png'];
            var validateimginput = document.getElementById('imginput').value.split('.').pop().toLowerCase();
            var isValidFile = false;

                for(var index in allowedExtension) {

                    if(validateimginput === allowedExtension[index]) {
                        isValidFile = true; 
                        break;
                    }
                }
                if(!isValidFile) {
                    document.getElementById('imginput').value = '';
                    alert('Allowed Extensions are : *.' + allowedExtension.join(', *.'));
                }
                return isValidFile;
        }
    function myregistration(){
        var emailValidation=document.getElementById("validateEmail").value;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validatecontno=document.getElementById('validateno').value;
        var name=document.getElementById("username").value;
        var pass=document.getElementById("password").value;
        if(emailValidation.match(validRegex) && (validatecontno.length==10) && (document.getElementById('imginput').value != '') &&(document.getElementById("age").value !='') && (document.getElementById("dob").value !='') && (name !='') && (pass !=''))
        {
            alert("Registration Successful");
        return true;}
            else if(validatecontno.length!=10){
                alert("Invalid contact no!");
                return false;}
                else if(document.getElementById('imginput').value == ''){
                    alert("Upload image!");
                }
                else if(document.getElementById("age").value==''){
                    alert("Please enter age!")
                }
                else if(document.getElementById("dob").value==''){
                 alert("Please enter date of birth!")
                }
                else if(document.getElementById("username").value.length==0){
                    alert("Please enter name!");
                }

                else if(document.getElementById("password").value.length==0){
                    alert("Please enter password!");
                }

                else {
                    alert("Entered email address is not valid!");
                }
            }