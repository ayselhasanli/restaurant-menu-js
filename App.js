var productContainer = document.getElementById("productContainer")
var buttonContainer = document.getElementById("buttonContainer")
var categories = ["breakfast", "shakes", "dinner", "lunch"]
var products = []

window.onload = async function fetchData () {
    try {
        const response = await fetch('http://localhost:3000/menu');
        const data = await response.json();
        products = data.map(child => child);
    }catch (error) {
        console.error(error);
    }
    showProducts("all")
}

function showProducts(category) {
    let displaySection = products.map((product) => {
        if (product.category === category || category === "all") {
            return `
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="product-card row">
                <div class="col-xl-5 col-lg-5 col-md-4 col-sm-5 col-xs-5">
                    <img src=${product.img} alt=${product.title} class="photo" />
                </div>
                <div class="col-xl-7 col-lg-7 col-md-8 col-sm-7 col-xs-7">
                    <div class="product-info">
                        <div class="header ">
                           <h4>${product.title}</h4>  
                           <h4 class="price">${product.price}</h4>
                        </div>
                    </div>
                    <div class="product-text">
                       ${product.desc}
                    </div>
                </div>
            </div>
        </div>
            `
        }
    })

    displaySection = displaySection.join("");
    productContainer.innerHTML = displaySection;
}



