

class createEl{
    #element
    constructor(el, obj){
        this.el = el;
        this.obj = obj;
    }

    defineElement(){
      return document.createElement(this.el);
    }

    defineAttributes(){
        this.#element = this.defineElement();
        const attrs = Object.entries(this.obj);

        attrs.forEach(([key, val]) => {

            this.#element.setAttribute(key, val);
        });
        
        return this.#element;
    }

}


export default createEl;
