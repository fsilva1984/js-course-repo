



class CreatEl {
    constructor(el) {
        this.el = el;
    }

    defineEl() {
        return document.createElement(this.el);
    }
    defineAttribute(el, obj) {
        const attrs = Object.entries(obj);
        attrs.forEach(([key, val]) => {
            el.setAttribute(key, val);
        });
        return el;
    }
}



class DefineStyle extends CreatEl {
    constructor(el) {
        super(el);
        this.date = new Date().toDateString();
    }
    defineClass(element) {
        element.classList.add('format_default');
        return element;
    }
}




// creating elemento div
const div = new CreatEl('div');
const div1 = div.defineEl();
const div2 = div.defineEl();

// setting attributes
div.defineAttribute(div1, { id: 'main', class: 'container' });




// insert on body
const body = document.querySelector('body');
body.insertAdjacentElement('afterend', div1);
body.insertAdjacentElement('beforeend', div2);



// setting styles default
const styling = new DefineStyle();
styling.defineClass(div1);
styling.defineClass(div2);

