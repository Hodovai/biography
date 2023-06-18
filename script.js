window.addEventListener('DOMContentLoaded', function () {
    var ticker = document.getElementById('ticker');
    
    // Function to update the ticker content
    function updateTicker() {
      var date = new Date();
      var dateString = date.toLocaleDateString();
      var timeString = date.toLocaleTimeString();
      var locationString = 'Your Location'; // Replace with actual location
      
      ticker.textContent = dateString + ' | ' + timeString + ' | ' + locationString;
    }
    
    // Function to scroll the ticker horizontally
    function scrollTicker() {
      ticker.scrollLeft += 1; // Adjust scrolling speed if needed
    }
    
    // Update ticker initially
    updateTicker();
    
    // Update ticker every second
    setInterval(updateTicker, 1000);
    
    // Start scrolling the ticker
    setInterval(scrollTicker, 50); // Adjust scrolling speed if needed
  });