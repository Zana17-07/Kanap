/*Créer une nouvelle URL en fonction de l'Id du produit demandé et à partir de l'API*/

const url= new URL(window.location.href);
const address = url.searchParams.get("id");
console.log(address);

const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const colors = document.getElementById('colors');
const quantity = document.getElementById('quantity');
const addButton = document.getElementById('addToCart');


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

    const img= document.querySelector('#item').innerHTML=
    `<img src="${product.imageUrl}" alt="${product.altTxt}"></img>`;

    const title= document.getElementById('title').innerHTML= 
    `<h3 class="productName">${product.name}</h3>`;

    const description= document.getElementById('description').innerHTML=
    `<p class="productDescription">${product.description}</p>`;
    

})

    /*const product=  
    a= document.createElement('a');
    document.getElementById('items');
    a.setAttribute("href",`./product.html?id=${product._id}`)
        a.innerHTML =
            `<article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">+
              <h3 class="productName">${product.name}</h3>+
              <p class="productDescription">${product.description}</p>
            </article>`*/


    /*const product=
        document.getElementById('items').innerHTML=
        "a" + ("href",`./product.html?id=${product._id}`)+
        "item__img" + <img src="${product.imageUrl}" alt="${product.altTxt}">+
        "title" + <h3 class="productName">${product.name}</h3>+
        "description" + <p class="productDescription">${product.description}</p>;
    */
   
    /*const a= document.createElement('a');
    document.getElementById('items');
    a.setAttribute("href",`./product.html?id=${product._id}`)
        a.innerHTML =
            `<article>
            "item__img"+`<img src="${product.imageUrl}" alt="${product.altTxt}">`+
            "title"+`<h3 class="productName">${product.name}</h3>`+
            "description"+`<p class="productDescription">${product.description}</p>`
            </article>`; */
            
/*.then((data) => {            
    const a= document.createElement('a');
    document.getElementById('items');
    a.setAttribute("href",`./product.html?id=${product._id}`)
        a.innerHTML =
            `<article>
                <div class="item__img"></div>+
                <h1 id="title"></h1>+
                <p id="price"></p>+
                <p id="description"></p>+
                <select name="color-select" id="colors"></select>+
                <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity"></input>+
                <button id="addToCart"></button>
            </article>`*/

   


//Trouver les erreurs
.catch((err) => {
    console.error(err);
  });
}




