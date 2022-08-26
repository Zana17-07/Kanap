/*Créer une nouvelle URL en fonction de l'Id du produit demandé et à partir de l'API*/

const str = window.location.href;
const url = new URL(str);
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

.then(data => {
/*détail de mon produit*/
})

//Trouver les erreurs
.catch((err) => {
    console.error(err);
  });

}