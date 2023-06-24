
    function clickButton(){

        const min = document.querySelector(".input-min").value
        const max = document.querySelector(".input-max").value

        
        result = Math.floor(Math.random() * (max - min) + min)
   
        alert(result)

       
        
}