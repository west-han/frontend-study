document.querySelector('.list').addEventListener('click', function(event) {

    if (event.target.classList.contains('tab-button')) {
        let index = event.target.dataset.id;
                
        for (let el of document.querySelectorAll('.tab-button')) {
            el.classList.remove('orange');
        }
        for (let el of document.querySelectorAll('.tab-content')) {
            el.classList.remove('show');
        }
        
        document.querySelector('.list').children[index].classList.add('orange');
        document.querySelectorAll('.tab-content')[index].classList.add('show');
    } else {
        event.stopPropagation();
    }
});