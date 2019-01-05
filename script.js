fetch("/products.php", {
    method: 'POST',
    credentials: 'include'
    })
    .then((response) => response.json())
    .then((json) => {
    console.log('Gotcha');
    })
    .catch((err) => {
    console.log(err);
    });