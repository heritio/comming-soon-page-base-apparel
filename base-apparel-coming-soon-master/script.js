

let errorIcon = document.querySelector(".container__header_content_email_error-icon");
let errorNotice = document.querySelector(".container__header_content_error");
let successNotice = document.querySelector(".container__header_content_success")
let emailBtn = document.querySelector(".container__header_content_email_btn");
let emailInput = document.querySelector(".container__header_content_email_input")


emailBtn.addEventListener("click", ()=> {
    let inputVal = emailInput.value;
    if(!validateEmail(inputVal)){
         errorIcon.style.visibility = "visible";
         errorNotice.style.visibility = "visible";
         successNotice.style.visibility = "hidden";
         return;
    }

    errorIcon.style.visibility = "hidden";
    errorNotice.style.visibility = "hidden";
    emailInput.value = "";
    successNotice.style.visibility = "visible";

})

function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}