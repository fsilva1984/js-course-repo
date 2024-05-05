

const input = document.querySelector('#inpt')
input.addEventListener('input', () => {
    let text = input.value;
  
    input.value = text.replace(text, capitalize(text));
  
});



function capitalize(str) {
    str = str.toLowerCase();

    str = str.split(' ');
    
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join(' ');
}
