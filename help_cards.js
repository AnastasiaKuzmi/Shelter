import create_element from './create_element.js';
export default class HelpCards{
    constructor(cards){
        this.cards = cards;
        this.render();
    }
    render(){
        this.elem = document.createElement('div');
        this.elem.className = 'list';
        let cards = this.cards.map(item => create_element(`
         <div class="card-help ${item.helpClass}"> 
          <img src='${item.image}'alt="icon" class="icon_help">
          <h4 class="h4Help">${item.title}</h4>
         </div>
        `))
        this.elem.append(...cards);
    }
}