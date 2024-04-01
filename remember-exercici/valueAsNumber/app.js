

const btn = document.querySelector('[data-js="btn"]');
const input = document.querySelector('[data-js="entry"]');
const response = document.querySelector('.response');


// input.addEventListener('input', e => {
//     console.log(e.target.value, e.target.valueAsNumber);

//     if (!e.target.valueAsNumber) {
//         response.textContent = "False! :o";
//         // input.value = '';
//         // return
//     }
//     response.textContent = "True! :)"
//     // input.value = '';
//     console.log(input.value.valueAsNumber);

// });

btn.addEventListener('click', () => {

    if (Number(input.value)) {
        response.textContent = "True! :)"
        input.value = '';
        return
    }
    
    response.textContent = "False! :o";
    input.value = '';
});


