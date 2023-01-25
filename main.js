const counter=document.querySelector("#counter")
const buttons=document.querySelectorAll(".btn")
console.log(buttons);

let count=0;

buttons.forEach(btn=> {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase')) {
            
               count++ ; 
        }
        else if (e.target.classList.contains('decrease')) {
            
            count-- ; 
        }
        else if (e.target.classList.contains('reset')){
            count=0 ;
            counter.style.color='black'
            
        }
        if(count>0){
            counter.style.color= 'green';
        }
        if(count<0){
            counter.style.color= 'red';
        }
        
    counter.textContent=count
        
        
})
});
   

   
