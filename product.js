var btns = document.querySelectorAll(".add")
var product = document.querySelectorAll(".product")
var cartValue=0
var cartIcon = document.getElementById("cart-value")
var productData
var cart = JSON.parse(localStorage.getItem("cart")) || []
var cartQuantity = JSON.parse(localStorage.getItem("quantity")) || []
var added = document.getElementById("added")
btns.forEach(function(e)
{
    var btn =e.addEventListener("click",addCart)
    
})




cart.forEach(function(item)
{
    addItemToMiniCart(item.name,item.price,item.img,item.quantity)
   

})
if(cartQuantity.length>0) cartValue = cartQuantity[0]
cartIcon.textContent = cartValue

var storage = document.getElementsByClassName("preview-cart")[0]

 storage.style.background = "aqua"



added.textContent =cartValue

function addCart(event)
{
    
    storage.style.background = "aqua"
    
  var item = event.target.parentElement
    var name = item.getElementsByTagName ("h2")[0].innerText
  
    var price = item.getElementsByTagName("h3")[0].innerText
    var img = item.getElementsByTagName("img")[0].src
   
  
    
    var quantity =1
    var miniQuantity;
    
    var dup = false
    data = {name,price,img,quantity }
    console.log(data)
    cart.forEach(function(item)
    {
       

        if(item.name===name) 
        {
            dup= true
          
            item.quantity++
            miniQuantity=item.quantity
            console.log(item.quantity)
            localStorage.setItem("cart",JSON.stringify(cart))
        }
       
    }
    )
    if(!dup)
    { 
        cartValue++
   cart.push(data)
   cartQuantity[0]=cartValue
    localStorage.setItem("cart",JSON.stringify(cart))
    localStorage.setItem("quantity",JSON.stringify(cartQuantity))
    cartIcon.textContent = cartValue
    added.textContent =cartValue
    console.log(cartValue)
    addItemToMiniCart(name, price, img,quantity)
   }
  
   
  
  
}
function addItemToMiniCart(name, price, img,quantity) {


    console.log("added")
    var cartRow = document.createElement('div')
    cartRow.classList.add('miniDetail')
    var cartItems = document.getElementsByClassName('storage')[0]
  
  
    var cartRowContents = `
    <img src=${img}>
    <h3>${name}</h3>
    <h4>${price}</h4>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
  
}

