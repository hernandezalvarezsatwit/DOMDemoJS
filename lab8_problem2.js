document.addEventListener("DOMContentLoaded", () => {

    //Get form and required fields
    const form = document.querySelector("#mainForm");
    const required = document.querySelectorAll(".required");
    form.addEventListener('submit', validateForm);      //Add Listener to submit form

    function validateForm(e) {
        //Check if title is blank
        if (required[0].value === "" || required[0].value == null) {
            required[0].parentNode.classList.add("highlight");      //Add to parent
            required[0].classList.add("highlight");                 //Add to child to so that both get colored
            e.preventDefault();
        }
        //Check if description is blank
        if (required[1].value === "" || required[1].value == null) {
            required[1].parentNode.classList.add("highlight");      //Add to parent
            required[1].classList.add("highlight");                 //Add to child to so that both get colored
            e.preventDefault();
        }
        //Check if checkbox is checked
        if (!required[2].checked || required[2].value == null) {
            required[2].parentNode.classList.add("highlight");     //Make surrounding box red
            e.preventDefault();
        }
    }
});


