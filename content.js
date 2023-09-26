const currentURL = window.location.href;
// Wrap your script in a function
function removeJobCards() {
    // Get all top-level divs with class "job-card-container"
    const jobCardContainers = document.querySelectorAll('.job-card-container');
  
    // Iterate through the divs and check for "Applied" text in child div
    jobCardContainers.forEach((container) => {
      const childDiv = container.querySelector('.tvm__text--neutral');
      if (childDiv && childDiv.textContent.includes('Applied')) {
        container.remove(); // Remove the top-level div
      }
    });
  }
  
  // Add a delay of 3000-4000 milliseconds (3-4 seconds) before executing the script
  function runRemoveJobCards() {
    removeJobCards();
    setTimeout(runRemoveJobCards, Math.floor(3000 + Math.random() * 1000)); // Random delay between 3-4 seconds
  }
  runRemoveJobCards(); // Start the process initially
  
  console.log('RERUN');
  
  // Add an event listener to run removeJobCards after a 3-second delay on any click event
  document.addEventListener('click', () => {
    setTimeout(removeJobCards, 3000);
  });