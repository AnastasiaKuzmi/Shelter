export default class Modal{          
    constructor(){
        this.render();
        this.elem.addEventListener('click', (event)=> this.functionClick(event));
    }
    render(){
        this.elem = document.createElement('div');
        this.elem.className = 'modal';
        return this.elem.innerHTML = (`
           <div class="modal_container">
            <div class="modal-button">
             <button type="button" class="modal_close">
             </button>
            </div>
            <div class="modal-headerBody">
            <img class="modal_img">
             <div class="modal_inner">
              <div class="modal_header">
               <h3 class="modal_title"></h3>
              </div>
              <div class="modal_body"></div>
             </div>
            </div>
           </div>
        `)
    }
    open(){
        document.body.append(this.elem);
    }
    functionClick(event){
        if (event.target.closest('.modal_close')){
            this.close();
        }
    }
    setTitle(title){
        this.elem.querySelector(".modal_title").textContent = title;
    }
    setBody(text){
        this.elem.querySelector('.modal_body').innerHTML="";
        this.elem.querySelector('.modal_body').append(text);
    }
    setImage(url){
        this.elem.querySelector('.modal_img').setAttribute('src', url);
    }
    close(){
        this.elem.remove();
    }
}