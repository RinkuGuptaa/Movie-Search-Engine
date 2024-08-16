const form = document.querySelector('form');
const gallery = document.querySelector('.image-container');

// Load saved searches from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    loadSavedSearches();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let query = form.querySelector('input').value.trim();
    form.querySelector('input').value = '';

    if (query === '') {
        query = "nothing";
    }
    tvMazeApi(query);
});

async function tvMazeApi(query) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const shows = await res.json();
    
    saveSearchResults(shows);
    makeImages(shows);
}

function saveSearchResults(shows) {
    let savedSearches = JSON.parse(localStorage.getItem('savedSearches')) || [];
    
    // Save only new results that haven't been saved before
    shows.forEach(show => {
        if (!savedSearches.some(saved => saved.show.id === show.show.id)) {
            savedSearches.push(show);
        }
    });

    localStorage.setItem('savedSearches', JSON.stringify(savedSearches));
}

function loadSavedSearches() {
    let savedSearches = JSON.parse(localStorage.getItem('savedSearches')) || [];
    makeImages(savedSearches);
}

function makeImages(shows) {
    gallery.innerHTML = ''; // Clear the gallery before rendering

    for (let show of shows) {
        if (show.show.image) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-wrapper');

            const img = document.createElement('img');
            img.src = show.show.image.medium;
            img.alt = show.show.name;

            // Add a click event to play the trailer or navigate to the show's page
            img.addEventListener('click', () => {
                playShow(show.show);
            });

            imgContainer.append(img);
            gallery.append(imgContainer);
        }
    }
}

function playShow(show) {
    // Simulate playing a video by opening the show's official page or a trailer
    const showURL = show.officialSite || `https://www.youtube.com/results?search_query=${show.name}+trailer`;
    window.open(showURL, '_blank'); // Open the link in a new tab
}