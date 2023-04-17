




const response= await fetch('/json/pieces-autos.json');
const pieces = await response.json();
//1-
// const permet de déclarer une variable qui ne peut pas être réaffectée
//2-
// await permet d'attendre la réponse du serveur avant de continuer le script, c'est une execution asynchrone de javascript



pieces.forEach(piece => {
    const pieceElt = document.createElement('div');
    pieceElt.classname = 'article';
    pieceElt.innerHTML = `
    <img src="/images/${piece.image}" alt="/images/${piece.image}.png">
    <h2>${piece.nom}</h2>
    <p>Price: ${piece.prix} Mad</p>
    <p>${piece.description}</p>
    `;
    document.querySelector('.fiches').appendChild(pieceElt);
});


let btn_sort= document.querySelector('.btn-sort');
let btn_filter= document.querySelector('.btn-trier');

btn_sort.addEventListener('click', function(){
    pieces.sort(function(a,b){
        return a.prix - b.prix;
    });
    document.querySelector('.fiches').innerHTML = '';
    pieces.forEach(piece => {
        const pieceElt = document.createElement('div');
        pieceElt.classname = 'article';
        pieceElt.innerHTML = `
        <img src="/images/${piece.image}" alt="/images/${piece.image}.png">
        <h2>${piece.nom}</h2>
        <p>Price: ${piece.prix} Mad</p>
        <p>${piece.description}</p>
        `;
        document.querySelector('.fiches').appendChild(pieceElt);
    });
}
);

btn_filter.addEventListener('onclick', function(){
    let pieces_filter = pieces.filter(function(piece){
        return piece.prix < 200;
    }
    );
    document.querySelector('.fiches').innerHTML = '';
    pieces_filter.forEach(piece => {
        const pieceElt = document.createElement('div');
        pieceElt.classname = 'article';
        pieceElt.innerHTML = `
        <img src="/images/${piece.image}" alt="/images/${piece.image}.png">
        <h2>${piece.nom}</h2>
        <p>Price: ${piece.prix} Mad</p>
        <p>${piece.description}</p>
        `;
        document.querySelector('.fiches').appendChild(pieceElt);
    });
}
);

const priceFilter= document.querySelector('#price-filter');
priceFilter.addEventListener('input', function(){
    let pieces_filter = pieces.filter(function(piece){
        return piece.prix < priceFilter.value;
    }
    );
    document.querySelector('.fiches').innerHTML = '';
    pieces_filter.forEach(piece => {
        const pieceElt = document.createElement('div');
        pieceElt.classname = 'article';
        pieceElt.innerHTML = `
        <img src="/images/${piece.image}" alt="/images/${piece.image}.png">
        <h2>${piece.nom}</h2>
        <p>Price: ${piece.prix} Mad</p>
        <p>${piece.description}</p>
        `;
        document.querySelector('.fiches').appendChild(pieceElt);
    });
}
);




