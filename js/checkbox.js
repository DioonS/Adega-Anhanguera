
const checkboxLink = document.querySelector('input[value="link"]');
const checkboxUpload = document.querySelector('input[value="upload"]');
const imagemLink = document.getElementById('imagemLink');
const imagemUpload = document.getElementById('imagemUpload');

checkboxLink.addEventListener('change', function () {
    if (this.checked) {
        imagemLink.style.display = 'block';
        imagemUpload.style.display = 'none';
        checkboxUpload.checked = false;
    } else {
        imagemLink.style.display = 'none';
    }
});

checkboxUpload.addEventListener('change', function () {
    if (this.checked) {
        imagemUpload.style.display = 'block';
        imagemLink.style.display = 'none';
        checkboxLink.checked = false;
    } else {
        imagemUpload.style.display = 'none';
    }
});
