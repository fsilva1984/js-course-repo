
function defineAttribute(el, obj) {
    const arrayOFProperties = Object.entries(obj);
    arrayOFProperties.forEach(([prop, value]) => {
        el.setAttribute(prop, value);
    });

    return el;
}

function createEl(element, objOfProperties) {
   const el = document.createElement(element);
    return defineAttribute(el, objOfProperties);
}

export default createEl;
