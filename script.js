// Liste des personnages (place les icônes dans le même dossier que le HTML)
const characters = [
    { name: 'Hero1', icon: 'hero1.png' },
    { name: 'Hero2', icon: 'hero2.png' },
    { name: 'Hero3', icon: 'hero3.png' },
    { name: 'Hero4', icon: 'hero4.png' },
    // Ajoute plus de personnages ici
];

// Fonction pour charger les icônes de personnages
function loadCharacters() {
    const characterContainer = document.querySelector('.character-icons');

    characters.forEach(character => {
        const img = document.createElement('img');
        img.src = character.icon;
        img.alt = character.name;
        img.classList.add('character-icon');
        img.draggable = true;

        // Ajoute l'événement de drag and drop
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', character.name);
        });

        characterContainer.appendChild(img);
    });
}

// Fonction pour gérer le drop dans les zones de pick
function setupDropZones() {
    const pickZones = document.querySelectorAll('.pick-zone');

    pickZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => e.preventDefault());

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            const characterName = e.dataTransfer.getData('text/plain');

            // Recherchez l'icône de personnage correspondant
            const character = characters.find(c => c.name === characterName);
            if (character) {
                const img = document.createElement('img');
                img.src = character.icon;
                img.alt = character.name;
                img.classList.add('character-icon');
                
                // Ajoutez l'icône au pick-zone
                zone.appendChild(img);
            }
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadCharacters();
    setupDropZones();
});
