var cart = JSON.parse(localStorage.getItem("cart")) || []
var btn = document.getElementsByClassName("add-btn")[0]
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



function addCart(event)
{
  var item = event.target.parentElement
  
    var name = item.getElementsByTagName ("h3")[0].innerText
    var price = item.getElementsByTagName("h4")[0].innerText
    var img = document.getElementsByClassName("big-img")[0].src
   
    var quantity =1
    if(tQuantity>1) quantity=0
    quantity+= tQuantity
    
    var dup = false
    data = {name,price,img,quantity }
    console.log(data)
    cart.forEach(function(item)
    {
       

        if(item.name===name) 
        {
            dup= true
          
            item.quantity+=tQuantity
            
            console.log(item.quantity)
            localStorage.setItem("cart",JSON.stringify(cart))
        }
       
    }
    )
    if(!dup)
    { 
        cartValue++
   cart.push(data)
    localStorage.setItem("cart",JSON.stringify(cart))
   }
   tQuantity =1;
   value.textContent="1"
   
   cartIcon.textContent = cartValue
   console.log(cartIcon.innerText)
}








function img(anything) {
 document.querySelector('.big-img').src = anything;
}




   
quantity()
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
