//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

//hide Hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function usernamePresent() {
  return $username.val().length > 0;
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && usernamePresent();
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

//When event happens on confirmation input
function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
  //console.log($( "submit" ).attr( "disabled" ));
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
