
/*
    Função faz um request na api dicionary free
    buscando por informações a palavra passada por parametro
*/
const request = async word => {
    const response = await fetch(/* `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` */);
    return await response.json();
}

request('house')
    .then(response => {
        /*
            destructure no array response
            estraindo apenas o que e nessessario
        
        */
        const { phonetics } = response[0];
        const { audio } = phonetics[0];
        console.log(audio)
    })
    .catch(error => console.log(error));




