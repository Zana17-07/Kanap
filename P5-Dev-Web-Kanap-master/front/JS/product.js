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

        document.getElementById('product_id').value=
        `${product._id}`;

/*Ajout des options de couleurs du produit demandé=
<option value="vert">vert</option>
<option value="blanc">blanc</option> */

    let color = document.getElementById("colors");
      for (i = 0; i < product.colors.length; i++) {
        color.innerHTML+= `<option value="${product.colors[i]}">${product.colors[i]}</option>`;
      }
})

//Trouver les erreurs
.catch((err) => {
    console.error(err);
  });
}

/***************************************************************************************** */
/***************************************************************************************** */


let color = document.getElementById("colors").value;
let quantity = parseInt(document.getElementById("quantity").value) && quantity.value >= 1 && quantity.value <=100;


function addToCart (product_id, color, quantity) {
   
    console.log("je suis là");

    let cart= JSON.parse(localStorage.getItem("cart"));
    console.log (cart);

/*je crée un objet vide de type cart où j'ajoute id color et qty et je stingify mon objet*/
    if(cart == null){
        cart= []
        cart.push(product_id, color, quantity);    
    }

    if(cart !=null){
        /* balayer avec une boucle cart les customElements
            Si idproduit = idproduit de cart et couleur = couleur de cart alors ajouter la nouvelle quantité
            sinon on ajout le produit cart.push(idproduct, color, quantity);*/
        
        /*initialise elt find*/
        eltFind = false;

        for (product of cart) { 
            if(product_id === cart.product_id && color === cart.product.color)
                cart.quantity = cart.quantity + quantity;
            }

            if (eltFind == false){
                cart.push(product_id, color, quantity);
            }

    localStorage.setItem("cart", JSON.stringify(cart))
    /*window.location.href = "cart.html"*/;
}}

/******************************************************************************* */
/******************************************************************************* */

