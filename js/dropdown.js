document.addEventListener('DOMContentLoaded', function () {
    const profileIcon = document.getElementById('profile-icon');
    const dropdownContent = profileIcon.querySelector('.dropdown-content');
    const dropdown = profileIcon.querySelector('.dropdown');

    profileIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show-dropdown');
        dropdown.classList.toggle('show-triangle');
    });

    document.addEventListener('click', function (event) {
        dropdownContent.classList.remove('show-dropdown');
        dropdown.classList.remove('show-triangle');
    });
});