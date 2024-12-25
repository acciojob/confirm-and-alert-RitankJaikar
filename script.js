//your JS code here. If required.
// Program to ask for confirmation and display corresponding alert
function confirmAndAlert() {
  const confirmation = confirm("Do you want to proceed?"); 

  if (confirmation) {
    alert("You clicked OK. Proceeding...");
  } else {
    alert("You clicked Cancel. Exiting...");
  }
}

// Call the function to execute
confirmAndAlert();