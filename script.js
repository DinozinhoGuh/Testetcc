

//--------------------------------------------------

const valor = document.querySelector(".preco");
const valorp = document.querySelector(".valorp");
const valort = document.querySelector(".valort");
const valorpTodos = document.querySelectorAll(".valorp");


let parcelat = (valort.textContent / 6).toFixed(2);


valorp.textContent = parcelat;


valorpTodos.forEach((element, index) => {
    
    let calculatedValue = parseFloat(parcelat) + index; 
    element.textContent = calculatedValue.toFixed(2);
});

//----------------------------------------------------------------------------------------------------------------------


// Função genérica para trocar imagem com fade
function trocarImagem(elementId, novaImagem) {
    const elemento = document.getElementById(elementId);
    elemento.style.opacity = 0;

    // Aguarde um curto período para garantir que a transição tenha efeito
    setTimeout(() => {
        elemento.src = novaImagem;
        elemento.style.opacity = 1;
    }, 300);
}

// Função genérica para restaurar imagem com fade
function restaurarImagem(elementId, imagemOriginal) {
    const elemento = document.getElementById(elementId);
    elemento.style.opacity = 0;

    // Aguarde um curto período para garantir que a transição tenha efeito
    setTimeout(() => {
        elemento.src = imagemOriginal;
        elemento.style.opacity = 1;
    },  300);
}

// Mapeamento de elementos para suas imagens originais e de hover
const elementosCatalogo = [
    { id: "roupa1one", imagemOriginal: "Midias/ft1_camisa1one.png", imagemHover: "Midias/ft2_camisa1one.png" },

    { id: "roupa2one", imagemOriginal: "Midias/ft1_camisa2one.png", imagemHover: "Midias/ft2_camisa2one.png" },

    { id: "roupa3one", imagemOriginal: "Midias/ft1_camisa3one.png", imagemHover: "Midias/ft2_camisa3one.png" },

    { id: "roupa4one", imagemOriginal: "Midias/ft1_camisa4one.png", imagemHover: "Midias/ft2_camisa4one.png" },

    { id: "roupa1star", imagemOriginal: "Midias/ft1_camisa1star.png", imagemHover: "Midias/ft2_camisa1star.png" },

    { id: "roupa2star", imagemOriginal: "Midias/ft1_camisa2star.png", imagemHover: "Midias/f2_camisa2star.png" },

    { id: "roupa3star", imagemOriginal: "Midias/ft1_camisa3star.png", imagemHover: "Midias/f2_camisa3star.png" },

    { id: "roupa4star", imagemOriginal: "Midias/ft1_camisa4star.png", imagemHover: "Midias/f2_camisa4star.png" },

    { id: "fav", imagemOriginal: "Midias/bFav.png", imagemHover: "Midias/bFav--prenchido.png" },

    { id: "login", imagemOriginal: "Midias/blogin.png", imagemHover: "Midias/blogin--prenchido.png" },
];

// Adiciona eventos de mouseover e mouseout para cada elemento no catálogo
elementosCatalogo.forEach((elemento) => {
    const elementoHtml = document.getElementById(elemento.id);

    if (elementoHtml) {
        elementoHtml.classList.add("catalogo-item"); // Adiciona a classe CSS

        elementoHtml.addEventListener("mouseover", () => {
            trocarImagem(elemento.id, elemento.imagemHover);
        });

        elementoHtml.addEventListener("mouseout", () => {
            restaurarImagem(elemento.id, elemento.imagemOriginal);
        });
    }
});

//-----------------------------------





