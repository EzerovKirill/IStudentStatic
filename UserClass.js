/**
 * Created by Георгий on 28.07.2015.
 */

//User class
function User() {
    var studNumber;
    var salt; //key for hashing
    var hashedPassword; //result of sha1(password+key)
    var signInId = $("#signIn");
    var signUpId = $("#signUp");
    var authorise;

    function signIn(studNumber, password)
    {
        //signIn code here
    };

    function signUp(studNumber, password, firstName,
                    lastName, faculty, year, group)
    {
        //signUp code here
    };

    function checkAuth()
    {
        //checking authorisation status
    }
}