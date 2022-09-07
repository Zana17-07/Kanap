const quantity= document.getElementById("quantity");
const addToCart= document.getElementById("addToCart");


function addToCart(title, colors, quantity) {


    /*1/ Aller recuperer le panier dans le local storage et le stocker dans un tableau (array) nommé cart*/
    let item= JSON.parse(localStorage.getItem("cart"));

    /*2/ Si le panier est vide, alors on ajoute le produit dans le tableau cart avec la quantité passée et la couleur choisie*/
        

    /*3/ Si le panier est non vide, alors
            Il faut verifier si dans le tableau cart, le produit / couleur est déjà présent
                Si le produit / couleur est déjà présent, on ajoute la quantité nouvelle
                Si le produit / couleur est absent, on ajoute le produit au tableau cart avec la couleur et la quantité*/


    /*4/ On sauvegarde le tableau cart dans le local storage*/


}

