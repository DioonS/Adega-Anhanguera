document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container-menu").classList.toggle("show-menu")
);

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callnow = immediate && timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callnow) func.apply(context, args);
    };
};

// Evento de click do submenu
const menuItems = document.querySelectorAll('.has-submenu');

menuItems.forEach(item => {
    item.addEventListener('click', event => {
        //event.preventDefault();
        item.classList.toggle('active');
    });
});


// Evento de click para direcionar para a página desejada no menu hamburguer
const submenuItems = document.querySelectorAll('.submenu a');

submenuItems.forEach(item => {
    item.addEventListener('click', event => {
        const parent = item.closest('.has-submenu');
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        }

    });
});

/* Debuger de eventos
const links = document.querySelectorAll('.menu-link');

links.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Link clicado!');
    });
});
*/