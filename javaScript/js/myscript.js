document.getElementsByClassName('navbar-toggler')
    [0].addEventListener('click', e => {
    const $el = e.currentTarget.closest('body').querySelector('.list-group');
    
    // $el.style.display = $el.style.display == 'block' ? 'none' : 'block';
    
    $el.classList.toggle('show');
});