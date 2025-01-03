document.addEventListener('DOMContentLoaded', () => {
    // Funksjon for å vise modal
    function showModal(project) {
        // Fjern eksisterende modal hvis en allerede finnes
        const existingModal = document.querySelector('.modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.classList.add('modal');

        const imagesHTML = project.images.map(img => `
            <img src="${project.folder}${img}" alt="${project.title}">
        `).join('');

        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <h3>Detaljer:</h3>
                <ul>${project.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
                <div class="modal-images">${imagesHTML}</div>
            </div>
        `;

        document.body.appendChild(modal);

        // Lukk modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }

    // Resten av funksjonaliteten for å opprette og håndtere prosjektkort
    // (Denne delen forblir uendret fra din nåværende kode)
});

document.addEventListener('DOMContentLoaded', () => {
    // Sjekk om vi er på projects.html
    if (!document.querySelector('.projects-grid')) return;

    const projects = [
        {
            title: "Temperatur- og Luftfuktighetsmåler",
            description: "En kompakt løsning for å måle og vise temperatur og luftfuktighet.",
            img: "../projects/Dht22/img/dht221.jpg",
            details: [
                "Microcontroller (ESP/Arduino)",
                "DHT22 Sensor",
                "OLED-skjerm",
                "3D-printet deksel"
            ],
            folder: "../projects/Dht22/img/",
            images: ["dht221.jpg", "dht222.jpg", "dht223.jpg", "dht224.jpg", "dht225.jpg"]
        },
        {
            title: "DesireQuest Spillplattform",
            description: "En dedikert plattform for det interaktive spillet DesireQuest.",
            img: "../projects/DesireQuestv0.5/img/box1.jpg",
            details: [
                "Raspberry Pi",
                "Touchskjerm",
                "3D-printet deksel"
            ],
            folder: "../projects/DesireQuestv0.5/img/",
            images: ["box1.jpg", "box2.jpg", "box3.jpg", "box4.jpg", "spill1.jpg"]
        },
        {
            title: "Flawax Protection System",
            description: "Et innovativt system for å beskytte rør- og ventilskjøter mot korrosjon.",
            img: "../projects/Flawax/img/show1.JPG",
            details: [
                "Spesialdesignede bokser for flenser",
                "Biologisk nedbrytbar voks",
                "Sensorer for trykk og lekkasje"
            ],
            folder: "../projects/Flawax/img/",
            images: ["show1.JPG", "show2.jpg", "show3.jpg", "show4.jpg", "tekteg2.jpg", "tektegn.jpg"]
        },
        {
            title: "Tesla Coil med SSTC Driver",
            description: "En Tesla Coil som genererer høyspenningseffekter ved hjelp av en SSTC-driver.",
            img: "../projects/TeslaCoil/img/coil1.jpg",
            details: [
                "MC34152P driver IC",
                "NE555 timer IC",
                "L7812CV spenningsregulator",
                "Håndlaget sekundærspole"
            ],
            folder: "../projects/TeslaCoil/img/",
            images: ["coil1.jpg", "coil2.jpg", "coil3.jpg", "coil4.jpg", "coil5.jpg"]
        },
        {
            title: "Mini Tesla Coil Audio",
            description: "En mini Tesla Coil som spiller av lyd ved hjelp av plasma.",
            img: "../projects/MiniTeslaCoilAudio/img/tesaud1.jpg",
            details: [
                "MJB41CT4G Transistor",
                "KNB2910A MOSFET",
                "Håndlaget sekundærspole"
            ],
            folder: "../projects/MiniTeslaCoilAudio/img/",
            images: ["tesaud1.jpg", "tesaud2.jpg", "tesaud3.jpg", "tesaud4.jpg", "tesaud5.jpg"]
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        // Legg til en unik ID for Flawax-containeren
        if (project.title === "Flawax Protection System") {
            projectCard.setAttribute('id', 'flawax-container');
        }

        projectCard.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <button class="view-details" data-index="${index}">Se Detaljer</button>
        `;

        projectsGrid.appendChild(projectCard);
    });

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            showModal(projects[index]);
        });
    });

    // Påskeegg: Klikk på hele Flawax-containeren åpner en ny fane
    const flawaxContainer = document.getElementById('flawax-container');
    if (flawaxContainer) {
        flawaxContainer.addEventListener('click', (event) => {
            // Sjekk at klikket ikke er på "Se Detaljer"-knappen
            if (!event.target.closest('.view-details')) {
                event.preventDefault();
                window.open('../projects/Flawax/img/flawaxhj/index.htm', '_blank');
            }
        });
    }

    function showModal(project) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const imagesHTML = project.images.map(img => `
            <img src="${project.folder}${img}" alt="${project.title}">
        `).join('');

        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <h3>Detaljer:</h3>
                <ul>${project.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
                <div class="modal-images">${imagesHTML}</div>
            </div>
        `;

        document.body.appendChild(modal);

        document.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Fullskjerm-funksjon med navigasjon
    function showFullScreen(images, currentIndex) {
        let index = currentIndex;

        const fullScreenOverlay = document.createElement('div');
        fullScreenOverlay.classList.add('fullscreen-overlay');

        const updateImage = () => {
            fullScreenContent.innerHTML = `
                <button class="prev-image">&lt;</button>
                <img src="${images[index]}" alt="Fullskjerm bilde">
                <button class="next-image">&gt;</button>
                <button class="close-fullscreen">&times;</button>
            `;
        };

        const fullScreenContent = document.createElement('div');
        fullScreenContent.classList.add('fullscreen-content');
        updateImage();

        fullScreenOverlay.appendChild(fullScreenContent);
        document.body.appendChild(fullScreenOverlay);

        // Naviger til forrige bilde
        fullScreenOverlay.addEventListener('click', (event) => {
            if (event.target.classList.contains('prev-image')) {
                index = (index - 1 + images.length) % images.length;
                updateImage();
            }
            // Naviger til neste bilde
            if (event.target.classList.contains('next-image')) {
                index = (index + 1) % images.length;
                updateImage();
            }
        });

        // Lukk fullskjerm
        document.querySelector('.close-fullscreen').addEventListener('click', () => {
            fullScreenOverlay.remove();
        });

        fullScreenOverlay.addEventListener('click', (event) => {
            if (event.target === fullScreenOverlay) {
                fullScreenOverlay.remove();
            }
        });
    }

    // Legg til klikkhendelse for alle modale bilder
    document.addEventListener('click', (event) => {
        if (event.target.closest('.modal-images img')) {
            const imgElement = event.target;
            const modalImages = [...document.querySelectorAll('.modal-images img')];
            const images = modalImages.map((img) => img.src);
            const currentIndex = modalImages.indexOf(imgElement);
            showFullScreen(images, currentIndex);
        }
    });
});
