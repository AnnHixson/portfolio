const kingDescriptionText = document.getElementById('hidden-king');
kingDescriptionText.style.display = 'none';

const kingDescriptionButton = document.getElementById('description-king');


function displayKingDescription(event) {
    event.preventDefault();

    if (kingDescriptionText.style.display === 'none') {
        kingDescriptionText.style.display = 'block';
        kingDescriptionButton.textContent = 'Hide Description'
    } else if (kingDescriptionText.style.display === 'block') {
        kingDescriptionText.style.display = 'none';
        kingDescriptionButton.textContent = 'View Description'
    };    
}

kingDescriptionButton.addEventListener('click', displayKingDescription);
