export async function fetchBreeds(selector) {
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => {
            data.forEach(breed => {
                selector.insertAdjacentHTML( "beforeend", `
                    <option value="${breed.id}">${breed.name}</option>
                `);
            });
        })
        .catch(erorr => console.log("Erorr", erorr));
}

export async function fetchCatByBreed(breedId) {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(breed => {
                selector.insertAdjacentHTML( "beforeend", `
                    <option value="${breed.id}">${breed.name}</option>
                `);
            });
        })
        .catch(erorr => console.log("Erorr", erorr));
}

