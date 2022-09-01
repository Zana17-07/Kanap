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

/*détail de mon produit*/
.then((data) => {

    /*définir la variable*/
    const product=(data);

        console.table(data);

/*Modifier le DOM par les données données dans l'API*/

        document.querySelector('.item__img').innerHTML=
        `<img src="${product.imageUrl}" alt="${product.altTxt}"></img>`;

        document.getElementById('title').innerHTML= 
        `<h3 class="productName">${product.name}</h3>`;

        document.getElementById('description').innerHTML=
        `<p class="productDescription">${product.description}</p>`;

        
        document.getElementById('price').innerHTML=
        `${product.price}`;

    /*définir la variable*/
    const i=0;
    
        document.getElementById('colors').innerHTML=

/*créer une boucle. La variable i=0 donc si i est inférieur à la longueur du tableau des couleurs, alors on peut incrémenter +1(i++)
Ajout des options de couleurs du produit demandé=
<option value="vert">vert</option>
<option value="blanc">blanc</option> */

        `for(const i=0; i<${product.colors.length}; i++){
        <option value="${product.colors}">${product.colors}</option>;
        }`   

})

   
//Trouver les erreurs
.catch((err) => {
    console.error(err);
  });
}




