var cart = JSON.parse(localStorage.getItem("cart")) || []
var btn = document.getElementsByClassName("add-btn")[0]
var cartQuantity = JSON.parse(localStorage.getItem("quantity")) || []
var value = document.getElementById("value")
var data
var cartValue = 0;
var cartIcon = document.getElementById("cart-value")
function updateMiniCart(quantity)
{
    var miniCart = document.getElementById("cart-value")
    miniCart.innerText = quantity;

}

let tQuantity =1;
btn.addEventListener("click", addCart)

quantity()

function addCart(event)
{
  var item = event.target.parentElement
  
    var name = item.getElementsByTagName ("h3")[0].innerText
    var price = item.getElementsByTagName("h4")[0].innerText
    var img = document.getElementsByClassName("big-img")[0].src
   
     
    var quantity =tQuantity
    var miniQuantity;
    
    var dup = false
    data = {name,price,img,quantity }
    console.log(data)
    cart.forEach(function(item)
    {
       
        
        if(item.name===name) 
        {
            console.log(tQuantity)
            dup= true
          
            item.quantity +=tQuantity
            
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







function img(anything) {
 document.querySelector('.big-img').src = anything;
}




   

    function quantity()
    {

    var up = document.getElementById("up")
    
    up.addEventListener("click",function()
    {
      
       tQuantity++
       value.innerText = tQuantity
      
        
    })
    var down = document.getElementById("down")
    down.addEventListener("click",function()
    {
        tQuantity--;
        if(tQuantity<1) tQuantity =1;
        value.innerText = tQuantity
    })
   

    
}
