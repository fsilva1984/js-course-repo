


class EmployeeDB {
    // ##############  private ################    
    #Key
    #val
    #keyring(key, val) {
        this.#Key = key;
        this.#val = val;

        const info = JSON.stringify(this.#val);
        localStorage.setItem(this.#Key, info);
    }
    // ########################################

    createEmployee(key, val) {// set new employee
        this.#Key = key;
        this.#val = val;
        this.#keyring(this.#Key, this.#val)
    }

    get(key) {// get employee
        this.#Key = key;
        const info = localStorage.getItem(this.#Key);
        return JSON.parse(info);
    }

    del(key) {// delete employee
        this.#Key = key;
        localStorage.removeItem(this.#Key);
        console.log('feito');
    }

}

// set data or update
const submit = document.querySelector('#sub');
const keygen = document.querySelector('#_key');
const entry = document.querySelectorAll('.box-entry .entry');

// get data
const ul = document.querySelector('.args');
const btn_info = document.querySelector('#info');
const input_info = document.querySelector('#input-info');

// delete data 
const input_del = document.querySelector('#input-del');
const del = document.querySelector('#del');


// array for auxilian
const array = [
    'Name',
    'Age',
    'Gender',
    'Admission',
    'Area'
];
const employeeDb = new EmployeeDB();

submit.addEventListener('click', e => {
    e.preventDefault();

    const obj = {
        Name: '',
        Age: '',
        Gender: '',
        Admission: '',
        Area: ''
    }

    if (keygen.value) {

        array.forEach((val, i) => {

            if (entry[i].value) {
                obj[val] = entry[i].value;
            } else {
                obj[val] = null;
            }

            entry[i].value = '';
        })

    } else {
        return;
    }

    employeeDb.createEmployee(keygen.value, obj);
    keygen.value = '';
});

btn_info.addEventListener('click', () => {
    let index = 0;
    let template = '';
    const regex = /^(all)$/i;

    if (regex.test(input_info.value)) {

        Object.keys(localStorage)
            .forEach(item => {
                template += `<li>Key-${index} ${item}</li>`;
                index++;
            });
        
        ul.innerHTML = template;
    } else { 
        let value = employeeDb.get(input_info.value);
        for (let i in value) {
            template += `<li>${array[index]}: ${value[i]}</li>`;
            index++;
        }
        ul.innerHTML = template;
    }
    input_info.value = '';


    
});


del.addEventListener('click', () => {
    
    if (input_del.value) {

        employeeDb.del(input_del.value);
        ul.innerHTML = `<li>${'done!'}</li>`
        
    } else {
        ul.innerHTML = `<li>${'Not has key'}</li>`
    }
    
});