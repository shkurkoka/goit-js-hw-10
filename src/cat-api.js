export async function fetchBreeds(selector) {
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => {
            data.forEach(breed => {
                const option = document.createElement(`
                    <option value="${breed.id}">${breed.name}</option>
                `);
                selector.appendChild(option);
            });
        })
        .catch(erorr => console.log("Erorr", erorr));
}


