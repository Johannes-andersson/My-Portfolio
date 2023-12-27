function updateTimer() {
    // Set a fixed start date
    const startDate = new Date('2023-06-01'); // Replace with your actual start date
    // Example: const startDate = new Date('2021-01-01');

    setInterval(function() {
        const now = new Date();
        const elapsedTime = now - startDate; // Difference in milliseconds

        // Convert milliseconds to hours, minutes, and seconds
        let seconds = Math.floor(elapsedTime / 1000);
        let minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        seconds = seconds % 60;
        minutes = minutes % 60;

        // Update the timer display
        document.getElementById('time-container').textContent = `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    }, 1000);
}

// Start the timer when the page loads
window.onload = updateTimer;


