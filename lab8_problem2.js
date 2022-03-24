const cb = document.querySelector("input[type=checkbox].required");
const form = document.querySelector("#mainForm");
const reqInput = document.querySelectorAll(".required");
//cb.addEventListener("click", isChecked);

form.addEventListener('submit', validateForm);

function validateForm(e) {
    if (reqInput[0].value === "" || reqInput[0].value == null) {
        alert("Title is not filled. You can not submit");
        e.preventDefault();
    }
    if (reqInput[1].value === "") {
        alert("Text Area is not filled. You can  not submit");
        e.preventDefault();
    }
    //Check if checkbox is checked
    if (!reqInput[2].checked) {
        alert("Checkbox is not checked. You can not submit");
        e.preventDefault();
    }
}

function isChecked(){
    if(document.querySelector("input[type=checkbox].required").checked){
        console.log("checked")
    }
    else{
        console.log("Unchecked")
    }
}
