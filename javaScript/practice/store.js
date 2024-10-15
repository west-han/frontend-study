const displayProducts = (jsonData, key, selector, keyword) => {
  const itemBox = document.querySelector(selector);
  const items = jsonData[key];
  for (let item of items) {
    let template =`
        <div class="item" draggable="true" id="item-${item.id}">
            <img src="http://localhost:51234/${item.photo}" alt="">
            <p class="title">${item.title}</p>
            <p class="brand">${item.brand}</p>
            <p class="price">${item.price}</p>
            <button>담기</button>
        </div>`;

    if (keyword) {
        if (item.title.includes(keyword) ||
            item.brand.includes(keyword)) {
            itemBox.insertAdjacentHTML('beforeend', template);
        }
    } else {
            itemBox.insertAdjacentHTML('beforeend', template);
        }
    }
};

const getProducts = keyword => {
    products = fetch('http://localhost:51234/store.json')
        .then(data => products = data.json())
        .then(data => displayProducts(data, 'products', '.item-box', keyword))
        .catch(e => console.log(e));
};

window.addEventListener('load', () => {
  getProducts();  
});

window.addEventListener('load', () => {
    document.querySelector('.search').addEventListener('input', function(e) {
        const keyword = this.value;
        const itemBox = document.querySelector('.item-box');
        itemBox.innerHTML = '';
        getProducts(keyword);
    });
});
let dt = null;
window.addEventListener('load', function() {
    document.querySelector('.item-box').addEventListener('dragstart', function(e) {
        const items = document.querySelectorAll('.item');
        for (let item of items) {
            if (item === e.target) {
                dt = e.dataTransfer;
                e.dataTransfer.setData('text', item.id);
            }
        }
    });
    
    document.querySelector('.drag-box').addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    document.querySelector('.drag-box').addEventListener('drop', function(e) {
        e.preventDefault();
        let id = e.dataTransfer.getData('text');
        let item = document.getElementById(id);
        let products = fetch('http://localhost:51234/store.json')
            .then(data => data.json())
            .then(data => data.products)
            .catch(e => console.log(e));
    });
});