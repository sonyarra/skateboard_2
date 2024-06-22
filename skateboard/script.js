const body = document.getElementById('body');
const slider = document.getElementById('slider');

function dark_mode()
{
    body.classList.toggle('darkmode');
}

slider.addEventListener('click', dark_mode);
