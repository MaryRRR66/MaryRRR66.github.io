function validateForm() {
    var recaptcha = document.querySelector('#g-recaptcha-response').value;
    if (recaptcha === "") {
        alert("Please complete the reCAPTCHA.");
        return false;
    }
    return true;
}
