function share() {
    console.log('funcion activada');
    footerA = document.getElementsByClassName('footer-active');
    footerA[0].style.display = 'grid';
    footer = document.getElementsByClassName('post-footer');
    footer[0].style.display = 'none';
}

function unshare() {

    footerA = document.getElementsByClassName('footer-active');
    footerA[0].style.display = 'none';
    footer = document.getElementsByClassName('post-footer');
    footer[0].style.display = 'grid';
}