function showAlert() {
    alert("Alert");
}

function number() {
    const userInput = prompt("Please enter a number:");
    const number = parseInt(userInput, 10);

    // Check if the number is even or odd
    if (!isNaN(number)) {
        if (number % 2 === 0) {
            alert(number + " is even.");
        } else {
            alert(number + " is odd.");
        }

        // Log numbers from 1 to the user's number
        for (let i = 1; i <= number; i++) {
            console.log(i);
        }
    } else {
        alert("That's not a valid number!");
    }
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const messageDiv = document.getElementById("message");

    // Validation
    if (!name || !email) {
        messageDiv.textContent = "Please fill out all fields.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Submission successful!";
        messageDiv.style.color = "green";
        // Optionally, clear the form
        document.getElementById("userForm").reset();
    }
});