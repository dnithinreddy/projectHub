// Apply background images to project cards
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const imageUrl = card.getAttribute('data-image');
        if (imageUrl) {
            card.style.backgroundImage = `url(${imageUrl})`;
        }
    });
});

// Filter projects based on search input
function filterProjects() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const projectCards = document.getElementsByClassName('project-card');

    for (let card of projectCards) {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
