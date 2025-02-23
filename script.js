function showsidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display='flex'
 }
function hidesidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display='none'
}


document.getElementById("contact-Form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    let isValid = true;

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Reset previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Validate Name
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }

    // Validate Email using regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById("messageError").innerText = "Message cannot be empty.";
        isValid = false;
    }

    // Submit the form if all validations pass
    if (isValid) {
        alert("Form submitted successfully!"); // Replace this with actual form submission logic
        document.getElementById("contactForm").reset(); // Clear form fields after submission
    }
});

