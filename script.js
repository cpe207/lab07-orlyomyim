const firstNameInput = document.querySelector("#first-name-input")
  , lastNameInput = document.querySelector("#last-name-input")
  , emailInput = document.querySelector("#email-input")
  , passwordInput = document.querySelector("#password-input")
  , submitBtn = document.querySelector("#submit-btn");
function validateEmail(s) {
    var a = s.indexOf("@")
      , i = s.lastIndexOf(".");
    return a > 0 && i > a + 1 && i < s.length - 1
}
firstNameInput.onkeyup = ()=>{
    firstNameInput.classList.remove("is-valid"),
    firstNameInput.classList.remove("is-invalid")
}
,
lastNameInput.onkeyup = ()=>{
    lastNameInput.classList.remove("is-valid"),
    lastNameInput.classList.remove("is-invalid")
}
,
emailInput.onkeyup = ()=>{
    emailInput.classList.remove("is-valid"),
    emailInput.classList.remove("is-invalid")
}
,
passwordInput.onkeyup = ()=>{
    passwordInput.classList.remove("is-valid"),
    passwordInput.classList.remove("is-invalid")
}
,
submitBtn.onclick = ()=>{
    isFirstNameOk = !1,
    isLastNameOk = !1,
    isEmailOk = !1,
    isPasswordOk = !1,
    "" === firstNameInput.value ? firstNameInput.classList.add("is-invalid") : (firstNameInput.classList.add("is-valid"),
    isFirstNameOk = !0),
    "" === lastNameInput.value ? lastNameInput.classList.add("is-invalid") : (lastNameInput.classList.add("is-valid"),
    isLastNameOk = !0),
    !1 === validateEmail(emailInput.value) ? emailInput.classList.add("is-invalid") : (emailInput.classList.add("is-valid"),
    isEmailOk = !0),
    passwordInput.value.length >= 6 ? (passwordInput.classList.add("is-valid"),
    isPasswordOk = !0) : passwordInput.classList.add("is-invalid"),
    isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && alert("Registered successfully")
}
;