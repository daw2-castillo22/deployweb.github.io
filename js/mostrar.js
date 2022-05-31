var url = "http://localhost:8000/products.controller";
export const mostrar = ()=> {
function getProducts() {
    var html = "";
     html += `<div class="col">
     <div class="card shadow-sm">`
    fetch(url)
    .then(resultado => resultado.json())
    .then(productsjson => {
        productsjson.forEach((element) => {
            var name = element.name;
            var price = element.price;
            var likes = element.likes;
            var img = element.img;
            html += `

            <img class="bd-placeholder-img card-img-top" src="../imagenes/${img}" width="100%" height="430" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></img>
            <div class="card-body">
              <h3 class="card-text">${name}</h3>
              <hr>
              <h4 class="card-text">${price}€</h4>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Añadir al carrito</button>
                </div>
                <small class="text-muted">${likes} Likes</small>
              </div>
            </div>`;

        })
        html += `</div>
        </div>`
    })
    .then(() => {
        document.getElementById("listarproductos").innerHTML = html;
    })
}
}

function getProductsByLikes() {
  var html = "";
   html += `<div class="col">
   <div class="card shadow-sm">`
  fetch(url)
  .then(resultado => resultado.json())
  .then(productsjson => {
      productsjson.forEach((element) => {
          var name = element.name;
          var price = element.price;
          var likes = element.likes;
          var img = element.img;
          html += `

          <img class="bd-placeholder-img card-img-top" src="../imagenes/${img}" width="100%" height="430" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></img>
          <div class="card-body">
            <h3 class="card-text">${name}</h3>
            <hr>
            <h4 class="card-text">${price}€</h4>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Añadir al carrito</button>
              </div>
              <small class="text-muted">${likes} Likes</small>
            </div>
          </div>`;

      })
      html += `</div>
      </div>`
  })
  .then(() => {
      document.getElementById("listarproductoslikes").innerHTML = html;
  })
}

