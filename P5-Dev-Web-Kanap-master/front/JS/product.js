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




/****************************************************************** */
/****************************************************************** */

/*Ajouter un produit au panier*/
/*let addToCart = document.getElementById("addToCart");
    addToCart.addEventListener("click", addToCart => {
        addToCart.innerHTML="Votre produit est bien ajouté au panier"
        window.location.href = "./cart.html"
});

function addToCart(idproduct, color, quantity) {

    console.log ("je suis là");
     
        
    

    /*1/ Aller récuperer le panier dans le local storage et le stocker dans un tableau (array) nommé cart*/
     
        /*let cart= JSON.parse(localStorage.getItem("cart"));
           
        console.log(cart);

    /*2/ Si le panier est vide, alors on ajoute le produit dans le tableau cart avec la quantité passée et la couleur choisie*/
    /*    if(cart == null){
            if(quantity.value > 0 && quantity.value <=100 && quantity.value != 0 && color.value != 0){
                cart.push(idproduct, color, quantity);
            }
        };

    /*3/ Si le panier est non vide, alors*/
    /*    if(cart !=null){


            /*Il faut verifier si dans le tableau cart, le produit / couleur est déjà présent
                Si le produit / couleur est déjà présent, on ajoute la quantité nouvelle*/
    /*        if (cart.find(idproduct && color)){ 
                if(quantity.value > 0 && quantity.value <=100 && quantity.value != 0 && color.value != 0){
                cart.quantity++;
                }
            }
            
            /*Si le produit / couleur est absent, on ajoute le produit au tableau cart avec la couleur et la quantité*/           
    /*        else if (cart.find(idproduct && color) != undefined){
                if(quantity > 0 && quantity <=100 && quantity != 0 && color!= 0){
                cart.push(idproduct, color, quantity);
                }
            }    
        }

    /*4/ On sauvegarde le tableau cart dans le local storage*/
    /*    localStorage.setItem("cart", JSON.stringify(cart));  
}*/

/**************************************************************** */
/****************************************************************** */

let myProduct= function addToCart (id, color, quantity) {
   
    id= data._id,
    color= data.colors.value,
    quantity= document.getElementById("quantity").value;

    console.log("je suis là");

    let cart= JSON.parse(localStorage.getItem("cart"));
    console.log (cart);

    if(cart == null){
        cart.push(id, color, quantity);
        
    }
    if(cart !=null){
        /* balayer avec une boucle cart les customElements
            Si idproduit = idproduit de cart et couleur = couleur de cart alors ajouter la quantité
            sinon on ajout le produit cart.push(idproduct, color, quantity);*/
        cart.quantity++
    }else{
        cart.push(id, color, quantity);
    };

    localStorage.setItem("cart", JSON.stringify(cart));
} 

/***************************************************** */
/******************************************************** */



