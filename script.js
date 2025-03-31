// fetch("luxdrive_site_data_full.json")
// .then(function(reponse) {
//     if(!reponse.ok){
//         throw new Error("Erreur : le fichier JSON n’a pas pu être chargé.")
//     }
// return reponse.json();
// })

// .then(function(data) {
//         let categorieVoiture = document.getElementById("voiture")
//         let categorieImage = document.getElementById("img")
//         let categoriePrix = document.getElementById("prix")
//         for (let i = 0; i < data.cars.length; i++) {
//         let logement = data.cars[i];
        
//         let titre = document.createElement("h2");
//         titre.textContent = logement.name;
//         categorieVoiture.appendChild(titre);
        
//         let image = document.createElement("img")
//         image.src = logement.image;
//         categorieImage.appendChild(image)

//         let prix = document.createElement("p")
//         prix.textContent =logement.price
//         categoriePrix.appendChild(prix)
            

  
//         }
//     }  
// );

// MEthode FOREACH

// fetch("luxdrive_site_data_full.json")
// .then(response => {
//     if (!response.ok) {
//         throw new Error("Erreur : impossible de charger les données.");
//     }
//     return response.json();
// })
// .then(data => {
//     let catalogue = document.getElementById("voiture");

//     data.cars.forEach(cars => {
//         // Création de l'élément conteneur
//         let carCard = document.createElement("div");
//         carCard.classList.add("car-card");

//         // Nom de la voiture
//         let carName = document.createElement("h2");
//         carName.textContent = cars.name;
//         carCard.appendChild(carName);

//         // Image de la voiture
//         let carImage = document.createElement("img");
//         carImage.src = cars.image;
//         carImage.alt = cars.name;
//         carImage.style.width = "300px"; // Ajuste la taille de l'image
//         carCard.appendChild(carImage);

//         // Prix de la voiture
//         let carPrice = document.createElement("p");
//         carPrice.textContent = cars.price + " euro";
//         carCard.appendChild(carPrice);

//         // Ajout de la carte au catalogue
//         catalogue.appendChild(carCard);
//     });
// })

// Methode FOR

fetch("luxdrive_site_data_full.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Erreur : le fichier JSON n’a pas pu être chargé.");
    }
    return response.json();
  })
  .then(function (data) {
    let catalogueVoiture = document.getElementById("voiture");

    for (let i = 0; i < data.cars.length; i++) {
      let voiture = data.cars[i];

      let divVoiture = document.createElement("div");
      
      let titre = document.createElement("h2");
      titre.textContent = voiture.name;
      divVoiture.appendChild(titre);

      let description = document.createElement("p");
      description.textContent = voiture.description;
      divVoiture.appendChild(description)

      let prix = document.createElement("p");
      prix.textContent = voiture.price + " euro";
      divVoiture.appendChild(prix);

      let image = document.createElement("img");
      image.src = voiture.image;
      image.alt = voiture.name;
      divVoiture.appendChild(image);

      catalogueVoiture.appendChild(divVoiture);
    }
  })
