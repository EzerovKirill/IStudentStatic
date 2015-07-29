//Driver file

jQuery(function($)
{
    $("#signIn").click(function(){
        showSignIn();
    });

    $("#signUp").click(function(){
        showSignUp();
    });
});

function showSignIn()
{
    //Show signIn form
};

function showSignUp()
{
    $(".hide:first").css("display", "block");
    $(".hide:first").css("position", "relative");
};
