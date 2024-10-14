// Select the form and the result div
const form = document.getElementById('flight-status-form');
const resultDiv = document.getElementById('result');

// Add an event listener to the form to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the flight number from the input
    const flightNumber = document.getElementById('flight-number').value;

    // Simulate fetching flight status (Here you would add actual API call logic)
    const status = checkFlightStatus(flightNumber);

    // Display the result
    resultDiv.textContent = `Flight Number ${flightNumber}: ${status}`;
});

// Function to simulate checking flight status
function checkFlightStatus(flightNumber) {
    // This is a placeholder function. In a real-world scenario, you would call an API here.
    const statuses = ['On Time', 'Delayed', 'Cancelled', 'Departed', 'Arrived'];
    // Randomly select a status for demonstration
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}
