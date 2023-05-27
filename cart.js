


var cartQuantity = JSON.parse(localStorage.getItem("quantity")) || []
var cart = JSON.parse(localStorage.getItem("cart")) || []
var cartValue=0
var cartIcon = document.getElementById("cart-value")

cart.forEach(function(item)
{
    addItemToCart(item.name,item.price,item.img,item.quantity)
    updateCartTotal()

})
cartIcon.textContent = cartQuantity[0]
console.log(cartValue)

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
      
       
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    if(cart.length===0) alert('Đơn hàng trống')
    else
    alert('Thanh toán thành công !')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    localStorage.removeItem("cart")
    localStorage.removeItem("quantity")
    cartIcon.textContent = 0
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    let elements = Array.from(document.querySelectorAll(".cart-row")); 
    let selectedElement = document.querySelector(":focus"); 
    
    let selectedIndex = elements.indexOf(selectedElement.parentElement.parentElement);
    let index = selectedIndex-1
   
    cart.splice(index,1)
  
    cartQuantity[0]-=1
    console.log(cartQuantity[0])
    cartIcon.textContent = cartQuantity[0]
    localStorage.setItem('quantity', JSON.stringify(cartQuantity));
    
    localStorage.setItem('cart', JSON.stringify(cart));
    buttonClicked.parentElement.parentElement.remove()
   
    updateCartTotal()
}



function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }

   
    let elements = Array.from(document.querySelectorAll(".cart-row")); // Thay thế "your-selector" bằng bộ chọn CSS phù hợp
    let selectedElement = document.querySelector(":focus"); // Lấy phần tử đang được chọn (được focus)
    
    let selectedIndex = elements.indexOf(selectedElement.parentElement.parentElement)
    let index = selectedIndex-1
   
    cart[index].quantity =input.value;
   
    
    localStorage.setItem('cart', JSON.stringify(cart));
  
    updateCartTotal()
}


function addItemToCart(title, price, imageSrc,quantity) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
  
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value=${quantity}>
            <button class="btn btn-danger" type="button">Xóa khỏi giỏ hàng</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total 
}


