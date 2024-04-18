// function zero(x) {
//     if (x < 10) {
//         x = '0' + x;
//     } return x;
// }

// function clock(element) {

//     setInterval(function () {

//         let date = new Date();

//         let hora = date.getHours();
//         let minuto = date.getMinutes();
//         let segundo = date.getSeconds();

//         minuto = zero(minuto);
//         segundo = zero(segundo);

//         element.innerHTML = `<h2>${hora}:${minuto}:${segundo}</h2>`
//     }, 1000);
// }






class Clock {
    #stopClock

    constructor(element) {
        this.element = element;
    }

    render() {
        const date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        function zero(num) {
            if (num < 10) {
                num = '0' + num;
            }
            return num
        }

        m = zero(m);
        s = zero(s);

        this.element.innerHTML = `<h2>${h}:${m}:${s}</h2>`
    }

    start() {
        this.#stopClock = setInterval(() => {
            this.render();
        }, 1000);
    }

    stop() {
        clearInterval(this.#stopClock)
    }
}




export default Clock;


