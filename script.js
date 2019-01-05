function getProducts() {

    fetch("/products.php", {
            method: 'POST',
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((json) => {
            var productList = document.getElementById('productList');
            for (var i = 0; i < json.length; i++) {
                var listElement = document.createElement('li');
                listElement.innerText = json[i];
                productList.appendChild(listElement);

            }
        })
        .catch((err) => {
            console.log(err);
        });
        
}
