document.querySelector('.list').addEventListener('click', function(event) {

    if (event.target.classList.contains('tab-button')) {
        let index = 0;
        
        for (let i in document.querySelectorAll('.tab-button')) {
            if (document.querySelectorAll('.tab-button')[i] === event.target) {
                index = i;
                break;
            }
        }
        
        for (let el of document.querySelectorAll('.tab-button')) {
            el.classList.remove('orange');
        }
        for (let el of document.querySelectorAll('.tab-content')) {
            el.classList.remove('show');
        }
        
        console.log(index);
        document.querySelector('.list').children[index].classList.add('orange');
        document.querySelectorAll('.tab-content')[index].classList.add('show');
    } else {
        alert('no');
    }
});