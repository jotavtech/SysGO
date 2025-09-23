var btnContratar = document.getElementById('btnContratar');
var formContainer = document.getElementById('formContainer');
var closeBtn = document.getElementById('close');

btnContratar.onclick = function() {
    formContainer.style.display = 'block';
}

closeBtn.onclick = function() {
    formContainer.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == formContainer) {
        formContainer.style.display = 'none';
    }
}
