/*Créer une nouvelle URL en fonction de l'Id du produit demandé et à partir de l'API*/

const url= new URL(window.location.href);
const address = url.searchParams.get("id");
console.log(address);



/*Initialiser la page product.html*/
kanapDisplay()

/*Créer la fonction pour l'affichages des canapés*/
function kanapDisplay() { 

/*Récupérer les données de l'API Products*/
fetch("http://localhost:3000/api/products/"+ address)

/*Retourne la réponse en format JSON*/
 .then((res) => {
    if (res.ok) {
      return res.json();
    }})

.then((data) => {
/*détail de mon produit*/

    let product=(data);

        document.querySelector('.item__img').innerHTML=
        `<img src="${product.imageUrl}" alt="${product.altTxt}"></img>`;

        document.getElementById('title').innerHTML= 
        `<h3 class="productName">${product.name}</h3>`;

        document.getElementById('description').innerHTML=
        `<p class="productDescription">${product.description}</p>`;

})

   
//Trouver les erreurs
.catch((err) => {
    console.error(err);
  });
}




