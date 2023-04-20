const kingDescription = document.getElementById('hidden-king');
kingDescription.style.display = 'none';

function displayKingDescription(event) {
    event.preventDefault();

    if (kingDescription.style.display === 'none') {
        kingDescription.style.display = 'block';
    } else if (kingDescription.style.display === 'block') {
        kingDescription.style.display = 'none';
    };    
}

document.getElementById('description-king').addEventListener('click', displayKingDescription);
