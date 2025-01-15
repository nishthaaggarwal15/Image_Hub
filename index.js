
function searchImages() {
    const searchTerm = document.getElementById("search-box").value;
    const apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&maxResults=10&client_id=mhPzaJF3OK-pwHp9KwTqNgghqZymhGZ_2Tv9n79Y-N4`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayImages(data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function displayImages(images) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = null;
  
    images.forEach(image => {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");
  
      const imge = document.createElement("img");
      imge.src = image.urls.small;
      imge.alt = image.alt_description;
      imge.style.height = "200px";
      imge.style.width = "200px";
  
      imageCard.appendChild(imge);
      gallery.appendChild(imageCard);
    });
  }