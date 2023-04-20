document.querySelector(".hamburguer").addEventListener("click", () => // -> Funciona
    document.querySelector(".container-menu").classList.toggle("show-menu")
);

const menuItems = document.querySelectorAll('.has-submenu');
const submenuItems = document.querySelectorAll('.submenu a');
const nonSubmenuItems = document.querySelectorAll('.no-submenu');

menuItems.forEach(item => {
    item.addEventListener('click', event => {
        const parent = item.closest('.has-submenu');
        const isActive = parent.classList.contains('active');

        // Fecha os outros submenus antes de abrir o atual
        const openSubmenus = document.querySelectorAll('.has-submenu.active');
        openSubmenus.forEach(openSubmenu => {
            if (openSubmenu !== parent) {
                openSubmenu.classList.remove('active');
            }
            });

            // Adiciona a classe ativa no submenu clicado
            parent.classList.toggle('active', !isActive);
        });
});

submenuItems.forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector(".container-menu").classList.remove("show-menu");
    });
});

nonSubmenuItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const topOffset = targetElement.offsetTop;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
        document.querySelector(".container-menu").classList.remove("show-menu");
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