document.getElementsByClassName('navbar-toggler')
    [0].addEventListener('click', e => {
    const $el = e.currentTarget.closest('body').querySelector('.list-group');
    
    // $el.style.display = $el.style.display == 'block' ? 'none' : 'block';
    
    $el.classList.toggle('show');
});

document.querySelector('.black-bg').addEventListener('click', function(e) {
    if (e.target === this) {
        document.querySelector('.black-bg').classList.remove('show');
        document.querySelector('.btn.btn-danger[type=button]').click();
    } else {
        e.stopPropagation();
    }
});