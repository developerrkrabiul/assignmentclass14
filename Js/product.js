// product work all Selection

const Psecbtn = document.getElementById('p_sec_btn');
const pAddForm = document.getElementById('p_add_form');
const p_out = document.getElementById('p_out');
const p_sec_btn = document.getElementById('p_sec_btn');
const p_sec_btndiv = document.querySelector('.p_sec_btndiv');
const p_form_section = document.querySelector('.p_form_section');
const p_form_remove = document.querySelector('.p_form_remove');


p_sec_btn.addEventListener('click', () => {
    p_form_section.classList = "d-block"
    p_sec_btndiv.classList = "d-none"
})
p_form_remove.addEventListener('click', () => {
    p_form_section.classList = "d-none"
    p_sec_btndiv.classList = "d-block"
})





pAddForm.addEventListener('submit', function(e){
    e.preventDefault();

    let pName = this.querySelector('input[name="p_name"]').value;
    let PPrice = this.querySelector('input[name="P_price"]').value;
    let pSLPrice = this.querySelector('input[name="P_sl_price"]').value;
    let PImage = this.querySelector('input[name="P_image"]').value;



    let product_arr;

    if (dataGet('Products')) {
        product_arr = dataGet('Products');
      } else {
        product_arr = [];
      }
    
    product_arr.push({
        PName   : pName,
        Reprice : PPrice,
        Slprice : pSLPrice,
        PImage  : PImage   

    });

    dataSend('Products', product_arr)

    // localStorage.setItem('Products', datafind)
    productDom();

});

productDom();
function productDom(){
    let allproduct = dataGet('Products');
    let pdata = " ";

    allproduct.map( function(data){
        
        pdata +=`
        <div class="col-lg-4 p_item my-2">
            <div class="card">
            <img class="card-img" src="${data.PImage}" alt="">
                <div class="card-body">
                <h3 class="p-title">${data.PName}</h3>
                <h4 class="p_price_out text-center"><span class="p-r_price">${data.Reprice + ' ৳ '}</span> <span class="p-ls-price">${data.Slprice + ' ৳ '}</span></h4>
                <div class="add-to-cardf">

                    <button id="love_icon1" class="love_icons"><i class="far fa-heart"></i></button>
                    <button id="love_icon2" class="love_icons"><i class="fas fa-heart"></i></button>
                    <div class="cartbtun-sec"><button class="cart_btn btn btn-dark">ADD TO CART</button></div>
                    <button class="love_icons"><i class="fas fa-random"></i></button>
                </div>

                </div>
            </div>
        </div>
        `

    })
    p_out.innerHTML = pdata;

};



