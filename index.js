const pageData = {
    "titre": "Bienvenue sur ma page",
    "labels": [
        "Documentation",
        "Tutoriels",
        "Ressources"
    ],
    "texte": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};

// Mise à jour du contenu de la page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('titre-principal').textContent = pageData.titre;
    
    const labels = document.querySelectorAll('.labels-container label');
    pageData.labels.forEach((text, index) => {
        if (labels[index]) {
            labels[index].textContent = text;
        }
    });
    
    const sectionTexte = document.querySelector('.section-texte p');
    if (sectionTexte) {
        sectionTexte.textContent = pageData.texte;
    }
}); 