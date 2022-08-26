/*Initialise la page index.html*/
kanapDisplay()

/*Créer la fonction pour l'affichages des canapés*/
function kanapDisplay() { 

/*Récupérer les données de l'API Products*/
fetch("http://localhost:3000/api/products")

/*Retourne la réponse en format JSON*/
 .then((res) => {
    if (res.ok) {
      return res.json();
    }})

/*Créer une boucle pour afficher les produits contenu dans l'API dans le DOM*/
.then(data => {
  for(product of data) {

/*Création d'une variable pour créer le lien de l'article canapé*/
    const a= document.createElement('a');

/*Rechercher l'ID dans la page entière du DOM et ajouter l'élément enfant*/
    document.getElementById('items').appendChild(a);

/*Modifier les attributs*/
    a.setAttribute("href",`./product.html?id=${product._id}`)

/*Modifier le DOM*/
    a.innerHTML =
        `<article>
          <img src="${product.imageUrl}" alt="${product.altTxt}">+
          <h3 class="productName">${product.name}</h3>+
          <p class="productDescription">${product.description}</p>
        </article>`

/*Récupère les résultats*/
    items.appendChild(a)
  }
})

//Pour trouver les erreurs si besoin
.catch((err) => {
    console.error(err);
  });

}

