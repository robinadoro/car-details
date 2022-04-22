function myFunction() {
    alert("Your message is received, we will get back to you")
}
document.querySelector('#contact_form').onsubmit = e => {
    e.target.submit();
    e.target.reset();
    return false;
};
// document.getElementById("contact_form").reset();