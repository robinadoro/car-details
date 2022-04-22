
    function myFunction() {
        alert("Your message is received")
    }
    document.querySelector('form').onsubmit = e => {
        e.target.submit();
        e.target.reset();
        return false;
    };
