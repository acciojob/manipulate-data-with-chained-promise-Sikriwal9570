// script.js

// Function to return a promise that resolves with an array of numbers after 3 seconds
function generateNumbersArray() {
    return new Promise(resolve => {
        setTimeout(() => {
            const numbersArray = [1, 2, 3, 4];
            resolve(numbersArray);
        }, 3000);
    });
}

// Function to update the text content of the output div
function updateOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = message;
}

// Chain promises to manipulate the array
generateNumbersArray()
    .then(numbersArray => {
        // Print the original array in the div with the id of output after 1 second
        setTimeout(() => {
            updateOutput(`Filtered Numbers: [${numbersArray.join(', ')}]`);
        }, 1000);

        // Filter out odd numbers and return the result in a new promise
        return new Promise(resolve => {
            setTimeout(() => {
                const filteredNumbers = numbersArray.filter(number => number % 2 === 0);
                resolve(filteredNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        // Print the array with even numbers multiplied by 2 in the div with the id of output after 2 seconds
        setTimeout(() => {
            const multipliedNumbers = evenNumbers.map(number => number * 2);
            updateOutput(`Final Result: [${multipliedNumbers.join(', ')}]`);
        }, 2000);
    })
    .catch(error => {
        // Handle errors or rejections
        console.error('Error:', error);
        updateOutput('An error occurred.');
    });
