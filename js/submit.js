const modal = document.getElementById("modal");
var correctIn = true;
var input = document.querySelectorAll("#contact input, select, textarea");
const backDrop = document.querySelector(".backdrop");
const output = document.querySelectorAll("#modal div");
const submitButton = document.querySelector(".submit_btn");
const modalButton = document.querySelector("#modal button");

function submitForm() {
  event.preventDefault();
  validateNameInput();
  /*   if (correctIn === true) {
    modal.style.display = "grid";
    modalButton.focus();
    backDrop.style.display = "block";
    document.querySelector(".header_ws").style.display = "none";
    document.body.style.overflow = "hidden";
    for (var i = 0; i < 5; i++) {
      output[i * 2 + 1].innerHTML = input[i].value;
    }
  } */
}

function validateNameInput() {
  /*   input[0].addEventListener("change", () => {
    const inputValue = input[0].value; */
  /*     document.querySelector(".throw_error_name").innerHTML = ""; */
  console.log("he");
  try {
    if (inputValue === "") throw "is mandatory ";
    if (inputValue.length < 3) throw "is too short ";
    if (/\d/g.test(inputValue) === true) throw "should only contain letters ";
  } catch (error) {
    document.querySelector(".throw_error_name").innerHTML = "Input " + error;
    correctIn = false;
  }
  /* }); */
}

function validateEmailInput() {
  input[1].addEventListener("change", () => {
    const inputValue = input[1].value;
    document.querySelector(".throw_error_email").innerHTML = "";
    try {
      if (inputValue === "") throw "is mandatory";
      else if (inputValue.length < 3) throw "is too short";
      else if (new RegExp("@").test(inputValue) === true)
        throw "is not a valid email adress";
    } catch (error) {
      document.querySelector(".throw_error_email").innerHTML = "Input " + error;
      correctIn = false;
    }
  });
}

function closeFunction() {
  modal.style.display = "none";
  backDrop.style.display = "none";
  document.querySelector(".header_ws").style.display = "flex";
  document.body.style.overflow = "auto";
}

function recipeDetails() {}
