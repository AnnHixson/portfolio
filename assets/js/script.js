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

const diceDescriptionText = document.getElementById('hidden-dice');
diceDescriptionText.style.display = 'none';
const diceDescriptionButton = document.getElementById('description-dice');
function displayDiceDescription(event) {
    event.preventDefault();

    if (diceDescriptionText.style.display === 'none') {
        diceDescriptionText.style.display = 'block';
        diceDescriptionButton.textContent = 'Hide Description'
    } else if (diceDescriptionText.style.display === 'block') {
        diceDescriptionText.style.display = 'none';
        diceDescriptionButton.textContent = 'View Description'
    };    
}
diceDescriptionButton.addEventListener('click', displayDiceDescription);

const whatchDescriptionText = document.getElementById('hidden-whatch');
whatchDescriptionText.style.display = 'none';
const whatchDescriptionButton = document.getElementById('description-whatch');
function displayWhatchDescription(event) {
    event.preventDefault();

    if (whatchDescriptionText.style.display === 'none') {
        whatchDescriptionText.style.display = 'block';
        whatchDescriptionButton.textContent = 'Hide Description'
    } else if (whatchDescriptionText.style.display === 'block') {
        whatchDescriptionText.style.display = 'none';
        whatchDescriptionButton.textContent = 'View Description'
    };    
}
whatchDescriptionButton.addEventListener('click', displayWhatchDescription);
