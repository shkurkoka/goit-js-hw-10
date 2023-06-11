export async function fetchBreeds(selector) {
    return fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => data)
        .catch((error) => console.log(error));
}

export async function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_qYlL8o9MDIH8U2L6yURyex2Y5rzbgVNFDh0R2EHrDR6dYWpbJMuVjmE2sG4pixTn`)
        .then(response => response.json())
        .then(data => data)
        .catch((error) => console.log(error));
}

