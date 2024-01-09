function checkAge() {
    let ageInput = document.getElementById('age').value;
    let resultContainer = document.getElementById('resultContainer');
    let popupContainer = document.getElementById('popupContainer');

    // Clear existing result
    resultContainer.innerHTML = '';

    if (!isNaN(ageInput) && ageInput !== '') {
        let age = parseInt(ageInput);
        let resultMessage = age >= 18 ? 'You are an adult' : 'You are a child';

        // Create and set the result message
        let resultElement = document.createElement('div');
        resultElement.innerHTML = `<h2>${resultMessage}</h2>`;

        // Append the result to the container
        resultContainer.appendChild(resultElement);

        // Show the popup
        popupContainer.style.display = 'flex';
    } else {
        alert('Please enter a valid age.');
    }
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}
