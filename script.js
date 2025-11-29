// Selecteer de benodigde elementen
const elements = document.querySelectorAll('.element');

const popup = document.getElementById('popup');
const popupName = document.getElementById('popup-name'); 
const popupText = document.getElementById("popup-text");

// Event: toon popup bij klik op een element
elements.forEach(element => {
    element.addEventListener('click', () => {

        // voeg clicked toe aan het aangetikte element
        element.classList.add('clicked');

        const name = element.getAttribute('data-name');
        const text = element.getAttribute('data-text');

        popupName.textContent = name;
        popupText.textContent = text;

        // 🛑 Geen popup als er geen data is
        if (!name && !text) return;

        popup.classList.remove('hidden');
        popup.classList.add('show');

        



        setTimeout(resizePopupTitle, 50);
    });
});

// Functie om popup te sluiten
function closePopup() {
    popup.classList.remove('show');
    popup.classList.add('hidden');
}

// Event: sluit popup bij druk op Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Event: sluit popup bij klik ergens op de popup achtergrond
popup.addEventListener('click', (e) => {
    closePopup();
});

// Functie: pas fontgrootte aan van titel als deze achter de close-button komt
function resizePopupTitle() {
    const popupRect = popup.getBoundingClientRect();
    const closeRect = closeButton.getBoundingClientRect();
    const nameRect = popupName.getBoundingClientRect();

    if (nameRect.right > closeRect.left - 10) {
        popupName.style.fontSize = '0.8rem'; 
    } else {
        popupName.style.fontSize = '1rem'; 
    }
}

window.addEventListener('resize', resizePopupTitle);

// Checked

