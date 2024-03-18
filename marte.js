document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'DEMO_KEY'; // Tu API key aquí

    // Función para hacer la solicitud a la API
    function getRoverPhotos(sol) {
        const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayPhotos(data.photos);
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });
    }

    // Función para mostrar las fotos en la página
    function displayPhotos(photos) {
        const photosDiv = document.getElementById('photos');
        photosDiv.innerHTML = '';

        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.img_src;
            img.alt = photo.camera.full_name;

            const photoDiv = document.createElement('div');
            photoDiv.classList.add('photo');
            photoDiv.appendChild(img);

            photosDiv.appendChild(photoDiv);
        });
    }

    // Función para obtener fotos cuando se hace clic en el botón
    window.getPhotos = function() {
        const solInput = document.getElementById('solInput');
        const sol = solInput.value.trim();

        if (sol === '') {
            alert('Please enter a Martian Sol.');
            return;
        }

        getRoverPhotos(sol);
    };
});