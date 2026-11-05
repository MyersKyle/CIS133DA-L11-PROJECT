/*
    Author: kyl2280714
    Course: CIS133DA
    Section: 27487
    Lesson: 11
*/

 // Display the date and time the document was last modified.
document.getElementById("lastModified").innerHTML = document.lastModified;


 // Display a confirmation message when the form is submitted.
function formSubmit() {
    alert("Your form has been submitted!");
}

 // Display the reset message when the Reset button is clicked.
function formReset() {
    document.getElementById("resetMessage").style.visibility = "visible";
}
