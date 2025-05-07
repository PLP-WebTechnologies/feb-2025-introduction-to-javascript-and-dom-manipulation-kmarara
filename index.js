// Function to change text content
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = 'The text has been changed!';
});

// Function to modify CSS styles
document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

// Function to add an element
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'New paragraph added!';
    document.getElementById('elementContainer').appendChild(newElement);
});

// Function to remove the last added element
document.getElementById('removeElementButton').addEventListener('click', function() {
    const container = document.getElementById('elementContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    } else {
        alert('No elements to remove!');
    }
});
