document.addEventListener('DOMContentLoaded', function () {
    const profileIcon = document.getElementById('profile-icon');
    const dropdownContent = profileIcon.querySelector('.dropdown-content');
    const dropdown = profileIcon.querySelector('.dropdown');
    const openModalBtns = document.querySelectorAll('#openModalBtn');
    const modal = document.getElementById('modalSair');
    const cancelBtn = document.getElementById('cancelBtn');
    const confirmBtn = document.getElementById('confirmBtn');

    // Modal Sair
    function showModal() {
        modal.style.display = 'block';
    }

    // Função para ocultar o modal
    function hideModal() {
        modal.style.display = 'none';
    }

    // Evento de clique nos botões "Sair" para abrir o modal
    openModalBtns.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão do link (navegação)
            showModal();
        });
    });

    // Evento de clique no botão "Cancelar" do modal
    cancelBtn.addEventListener('click', hideModal);

    // Evento de clique no botão "Sim" do modal
    confirmBtn.addEventListener('click', function () {
        window.location.href = 'login.html';
        hideModal();
    });

    // Modal Sobre
    const openModalBtnSobre = document.getElementById('openModalBtnSobre');
    const closeModalBtnSobre = document.getElementById('closeModalBtnSobre');
    const modalSobre = document.getElementById('modalSobre');

    // Evento de clique no botão "Sobre" para abrir o modal
    openModalBtnSobre.addEventListener('click', function (event) {
        event.preventDefault();
        modalSobre.style.display = 'block';
    });

    // Evento de clique no botão "Sair" do modal "Sobre" para fechar o modal
    closeModalBtnSobre.addEventListener('click', function () {
        modalSobre.style.display = 'none';
    });
});
