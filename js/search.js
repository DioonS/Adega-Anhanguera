/*function changeImage(imageName) {
    // Seleciona todos os elementos com a classe "dropdown-image"
    const images = document.querySelectorAll(".dropdown-image");
    
    // Itera sobre os elementos e altera a imagem correspondente
    images.forEach(image => {
        const src = `imagens/${imageName}.png`; // URL da imagem correspondente
        image.src = src;
    });
}*/

function myFunction() {
    var input, filter, cards, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("card-container");

    for (i = 0; i < cards.length; i++) {
        txtValue = cards[i].querySelector("h3").textContent || cards[i].querySelector("h3").innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
        } else {
        cards[i].style.display = "none";
        }
    }
}

