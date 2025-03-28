// Get the necessary elements
const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');
const nameInput = document.getElementById('name');
const roomTypeInput = document.getElementById('roomType');
const checkInInput = document.getElementById('checkIn');
const checkOutInput = document.getElementById('checkOut');

// Handle form submission
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload on form submission

    // Get form input values
    const name = nameInput.value;
    const roomType = roomTypeInput.value;
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;

    // Check if all fields are filled
    if (name && roomType && checkIn && checkOut) {
        // Display booking details
        bookingMessage.innerHTML = `
            <strong>Booking Confirmed!</strong><br>
            Name: ${name}<br>
            Room Type: ${roomType}<br>
            Check-In Date: ${checkIn}<br>
            Check-Out Date: ${checkOut}
        `;
        bookingMessage.style.color = "green";  // Change text color to green for success
    } else {
        // Display error message if any field is missing
        bookingMessage.innerHTML = "Please fill in all the fields.";
        bookingMessage.style.color = "red";  // Change text color to red for error
    }

    // Reset the form for new booking
    bookingForm.reset();
});
