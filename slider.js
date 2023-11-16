import create_element from './create_element.js'
export default class Slider{
    constructor(slides){
        this.slides = slides;
        this.currentSlideNumber = 0;
        this.render();
        this.addEventListeners();
        this.visibleSlides();
    }
    render(){
        this.elem = document.createElement('div');
        this.elem.classList.add('slider');
        this.elem.innerHTML = (`
          <button class="button_arrow button_arrow_back" id="back"></button>
          <div class="slider_inner"></div>
          <button class="button_arrow button_arrow_next" id="next"></button> 
        `)
        
        let slides = this.slides.map(item => create_element(`
         <div class="allInCard">
          <img src="${item.img}" alt="${item.id}" class="img-pets">
          <h3 class="h3-pets">${item.title}</h3>
          <button class="button_primary button_pets" id="${item.id}" onclick="openModal()">Learn more</button>
         </div>`));
         this.elem.querySelector(".slider_inner").append(...slides);
        this.update();
    }
    addEventListeners(){
        this.elem.onclick = ({target}) => {
            if (target.closest('#next')){
                this.next();
            }
            if (target.closest('#back')){
                this.back();
            }
        }
    }
    next() {
     this.currentSlideNumber++;
     this.update();
    }
    back() {
     this.currentSlideNumber--;
     this.update();
    }
    visibleSlides(){
        if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 320){
            return 2;
        } else if(document.documentElement.clientWidth <= 320){
            return 1
        } else{
            return 4
        }
    }
    update(){
        let offset = -(this.elem.querySelector('.allInCard').offsetWidth + 120) * this.currentSlideNumber;
        this.elem.querySelector(".slider_inner").style.transform = `translateX(${offset}px)`;
        
        if (this.currentSlideNumber == this.slides.length - this.visibleSlides()) {
         this.elem.querySelector('#next').style.display = 'none';
        } else {
         this.elem.querySelector('#next').style.display = '';
        }
      
        if (this.currentSlideNumber == 0) {
         this.elem.querySelector('#back').style.display = 'none';
        } else {
         this.elem.querySelector('#back').style.display = '';
        }
    }
}

