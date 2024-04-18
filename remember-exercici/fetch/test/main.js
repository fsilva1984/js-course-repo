
/*
    pegando uma imagem do diretorio
    atual com o fetch

*/

class Get_img {

    constructor(img) {
        this.img = img;
    }
    bd = document.querySelector('body');
    _fetch() {
        fetch(this.img)
            .then(response => {


                try {

                    if (response.ok) {
                        let url = response.url
                        this.bd.insertAdjacentHTML('beforeend', `<img src="${url}" style="max-width: 200px;"></img>`)
                    }

                    throw new Error("img not found");

                } catch (error) {

                    console.log(error);
                }

            })


    }
}
const myImg = new Get_img('coderArt.png');

myImg._fetch();