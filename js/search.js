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

// Adiciona evento de clique ao botão buscar
var searchButton = document.querySelector(".searchButton");
var input = document.getElementById("myInput");
var timeoutId;

searchButton.addEventListener("click", function() {
    myFunction();

    // Obtém o primeiro elemento com o display diferente de "none"
    var firstResult = document.querySelector(".card-container:not([style*='display: none'])");

    // Rola a página automaticamente até o primeiro resultado da busca
    if (firstResult) {
        firstResult.scrollIntoView({behavior: "smooth"});
    }
});


// Adiciona o evento de enter para busca
input.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();

        // Cancela a execução anterior da busca se ainda estiver aguardando
        clearTimeout(timeoutId);

        // Espera 10 milisegundos antes de executar a busca
        timeoutId = setTimeout(function () {
            myFunction();

            // Obtém o primeiro elemento com o display diferente de "none"
            var firstResult = document.querySelector(".card-container:not([style*='display: none'])");

            // Rola a página automaticamente até o primeiro resultado da busca
            if (firstResult) {
                firstResult.scrollIntoView({behavior: "smooth"});
            }
        }, 10);
    }
});