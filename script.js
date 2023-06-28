// Get references to the dropdown list and the button
const colorSelect = document.getElementById('colorSelect');
const removeColorButton = document.getElementById('removeColorButton');

// Add event listener to the button
removeColorButton.addEventListener('click', function() {
  // Get the selected option
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];

  // Remove the selected option from the dropdown list
  colorSelect.removeChild(selectedOption);
});
