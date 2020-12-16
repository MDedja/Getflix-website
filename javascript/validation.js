


$().ready(function (){

    alert("Please fill all fields before you submit");

    $("#signupForm").validate({
        rules:{
            firstname: "required",
            lastname: "required",
            password:{
                required: true,
                minlength: 5
            },
            confirm_password:{
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email:{
                required: true,
                email: true
            }
        },
        messages:{
            firstname: "Please, enter your first name  :)))",
            lastname: "Please, enter your last name  :)))",
            password:{
                required: "Please enter some password :)))",
                minlength:"Your password must be at least 5 characters long :)))"
            },
            confirm_password:{
                required: "Retype your password :)))",
                minlength:"Also 5 char long :)))",
                equalTo:"Doesnt match with your password :)))"
                
            }
        }
    });

    $("#btn").click(function(){
        confirm("Yey");
    })
    

});