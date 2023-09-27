function removeJobCards() {
  const jobCardContainers = document.querySelectorAll('.job-card-container');
  jobCardContainers.forEach((container) => {
    const appliedTextElements = container.querySelectorAll('.tvm__text--neutral');
    
    for (const element of appliedTextElements) {
      if (element.textContent.includes('Applied')) {
        container.remove();
        break; 
      }
    }
  });
}
  
function runRemoveJobCards() {
    removeJobCards();
    setTimeout(runRemoveJobCards, 1000); 
}

runRemoveJobCards(); 

document.addEventListener('click', () => {
  setTimeout(removeJobCards, 1000);
});