const form = document.querySelector("#mainForm");
const reqInput = document.querySelectorAll(".required");
form.addEventListener('submit', validateForm);

function validateForm(e) {
    //Check if title is blank
    if (reqInput[0].value === "" || reqInput[0].value == null) {
        reqInput[0].parentNode.classList.add("highlight");      //Add to parent
        reqInput[0].classList.add("highlight");                 //Add to child to so that both get colored
        e.preventDefault();
    }
    //Check if description is blank
    if (reqInput[1].value === "" || reqInput[1].value == null) {
        reqInput[1].parentNode.classList.add("highlight");      //Add to parent
        reqInput[1].classList.add("highlight");                 //Add to child to so that both get colored
        e.preventDefault();
    }
    //Check if checkbox is checked
    if (!reqInput[2].checked || reqInput[2].value == null) {
        reqInput[2].parentNode.classList.add("highlight");     //Make surrounding box red
        e.preventDefault();
    }
}
