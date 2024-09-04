document.addEventListener('DOMContentLoaded', function() {
   initButtonEventListeners();
});

function initButtonEventListeners() {
   const buttons = document.querySelectorAll('.view-buttons button');

   buttons.forEach(button => {
      button.addEventListener('mouseup', handleMiddleMouseClick);
   });
}

function handleMiddleMouseClick(event) {
   // Check if the middle mouse button (scroll wheel) was used
   if (event.button === 1) {
      event.preventDefault();  // Prevent the default button event

      // Get URL from the button's onclick attribute
      const onclick = this.getAttribute('onclick');   
      const url = onclick.split(/['']/)[1];
      
      window.open(url, '_blank', 'noreferrer, noopener'); // Open the URL in a new background tab
  }
}
