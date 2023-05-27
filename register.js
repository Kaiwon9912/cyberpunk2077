var form = document.getElementById('form')
var password = document.getElementById('p')
var password2 = document.getElementById('p2')
var email = document.getElementById('email')
var perror = document.getElementById('perror')
var emailError = document.getElementById('emailError')
console.log(form)
form.addEventListener('submit',(e)=>
{
    let message="";
   
    
    
    
    if(password.value.length<8)
    {
        message = "Mật khẩu ít nhất 8 kí tự"
        perror.textContent=message
       
    }
    else
    if (password2.value != password.value)
    {
        message ="Mật khẩu không khớp"
        perror.textContent=message
       
    }

    
  
 
  
   
   

    if(message.length>1)  e.preventDefault()
    
    
   
    

})
form.addEventListener('submit',(e)=>
{
    let message="";
   
    console.log(message)
    if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
         message="Mail không hợp lệ"
         emailError.textContent= message;
    }
  
   
   

    if(message.length>1)  e.preventDefault()
    
    
   
    

})

