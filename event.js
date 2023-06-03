document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user input values
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var date = document.getElementById("dateInput").value;
    var event= document.getElementById("eventInput").value;
    var phone= document.getElementById("phone").value;
    // Perform any necessary validation on the input values
    if (name === "" || email === "" || date === "") {
      alert("Please fill in all the required fields.");
      return;
    }
  
    // Process the user details (e.g., send them to a server, perform further actions)
    // Here, you can use AJAX, fetch, or any other method to send the data to the server
  
    // Optional: Clear the form fields after submission
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("eventInput").value ="";
    document.getElementById("phone").value="";
    // Optional: Show a success message or redirect to a confirmation page
    alert("Event booked successfully!");
  });
  