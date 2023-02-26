const cards = document.querySelectorAll('.memory-img')
let flipCard = false;
let first, second;



function fliping(){
    this.classList.add('flip')
  
if(!flipCard){
    flipCard = true;
    first = this;
} else{
    flipCard = false;
    second = this;

    if(first.dataset.framework ===
         second.dataset.framework
        ){
           first.removeEventListener('click', fliping)
           second.removeEventListener('click', fliping)
        } else{
            setTimeout(() =>{
                first.classList.remove('flip')
                second.classList.remove('flip')
            }, 1000)
        }
    
}

}

cards.forEach(img => img.addEventListener('click', fliping))





