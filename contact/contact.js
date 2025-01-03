// Velg modal-elementet (popup-vindu) og knappene som styrer det
const modal = document.getElementById('contactModal'); // Modal-popup som inneholder skjemaet
const openModalBtn = document.getElementById('openFastmail'); // Knappen for å åpne modal
const closeModalBtn = document.querySelector('.close-modal'); // "Lukk"-knappen i modal

// Skjul modal som standard for å sikre at den ikke vises ved sidens start
modal.style.display = 'none';

// Åpne modal når brukeren klikker på "Fastmail"-knappen
openModalBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Hindrer standard oppførsel for lenken
    modal.style.display = 'flex'; // Gjør modal synlig ved å endre display-stil
});

// Lukk modal når brukeren klikker på "Lukk"-knappen
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Skjuler modal ved å sette display til 'none'
});

// Lukk modal hvis brukeren klikker utenfor innholdet
window.addEventListener('click', (e) => {
    if (e.target === modal) { // Sjekker om klikket var utenfor modal-innholdet
        modal.style.display = 'none'; // Skjuler modal
    }
});

// Håndter skjema-innsending for å generere en e-post
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Hindrer standard innsending av skjema

    // Hent verdiene fra inputfeltene i skjemaet
    const name = document.getElementById('name').value; // Navn fra brukeren
    const email = document.getElementById('email').value; // Brukerens e-post
    const message = document.getElementById('message').value; // Meldingen brukeren skrev

    // Lag en mailto-lenke med innholdet fra skjemaet
    const mailtoLink = `mailto:arvid.kodehode@hotmail.com?subject=Kontakt&body=${encodeURIComponent(
        `Navn: ${name}\nE-post: ${email}\n\nMelding:\n${message}`
    )}`;

    // Åpne standard e-postklient med ferdig utfylt melding
    window.location.href = mailtoLink;

    // Lukk modal etter at brukeren har sendt meldingen
    modal.style.display = 'none';
});
