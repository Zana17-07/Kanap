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





function addToCart (product_id, color, quantity) { 

/*  1/Vérifier:

        /*si la quantité est comprise entre 1 et 100
            alors console.log(quantity)
            sinon  "la quantité choisie n'est pas comprise entre 1 et 100"*/
        
        if(quantity >=1 && quantity <=100 ){
            console.log (quantity)
        }else{
           return "Merci de bien vouloir choisir une quantité comprise entre 1 et 100";
        }

        /*si la couleur est renseignée
            alors console.log (color)
            sinon "Merci de bien vouloir sélectionner une couleur dans la liste"*/

        if(color != undefined){
            console.log (color)
        }else{
           return "Merci de bien vouloir choisir une couleur dans la liste";
        }

        console.log("je suis là");
    
    /*2/ Récupérer les données dans le local storage et créer un array cart*/
        let cart= JSON.parse(localStorage.getItem("cart"));
        console.log (cart);
    /*3/ Ajouter produits dans le panier

        si le panier est vide
            alors créer un panier [] et ajouter le produit

        sinon 
            initialiser l'élément find
            verifier en balayant avec une boucle l'élément cart
                si l'id et la couleur existe déjà dans le panier
                    alors incrémenter la nouvelle quantité (si celle-ci ne dépasse pas la quantité max sinon msg d'erreur) 
                    car l'élément a été trouvé
                sinon 
                    si l'id ou la couleur est différente 
                    alors on ajoute le produit dans le panier 
                    car l'élément n'a pas été trouvé*/
        
        if(cart == null){
            cart= []
            cart.push(product_id, color, quantity);    
        }

        else{

            eltFind= false;

            while(cart) { 

                if(product_id === cart.product_id && color === cart.color){ 
                    cart.quantity = cart.quantity + quantity
                    eltFind == true;
                }

                else{

                    if(product_id !=cart.product_id || color !=cart.color ){ 
                    cart.push(product_id, color, quantity)
                    eltFind == false;
                    }
                }
            }
        }

        

    /*4/ Sauvegarder les nouveaux produits dans le local storage*/
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log (cart);
    /*5/ Quand le client clique sur "Ajouter au panier", retourner vers la page cart.html*/
        window.location.href = "cart.html";


}




/************************************************************** */


/*********************************************************** */
   
    /* si la quantité est compris entre 1 et 100 ok ou pas
    si le couleur est renseignée

    console.log("je suis là");

    let cart= JSON.parse(localStorage.getItem("cart"));
    console.log (cart);

/*je crée un objet vide de type cart où j'ajoute id color et qty et je stingify mon objet*/
   /* if(cart == null){
        cart= []
        cart.push(product_id, color, quantity);    
    }

    if(cart !=null){
        /* balayer avec une boucle cart les customElements
            Si idproduit = idproduit de cart et couleur = couleur de cart alors ajouter la nouvelle quantité
            sinon on ajout le produit cart.push(idproduct, color, quantity);*/
        
        /*initialise elt find*/
       /* eltFind = false;

        for (product of cart) { 
            if(product_id === cart.product_id && color === cart.product.color)
                cart.quantity = cart.quantity + quantity
                eltFind == true;
            }

           

    localStorage.setItem("cart", JSON.stringify(cart))
    window.location.href = "cart.html";
}*/


/******************************************************************************* */
/******************************************************************************* */

