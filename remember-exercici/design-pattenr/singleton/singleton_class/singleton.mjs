
// Design patters: padrão Singleton

class Singleton {
    /*
     A state propriedade privada pode
     ser um objeto, array, etc.
    */
    constructor() {
        this.state = null;
    }
    // Método para atualizar o estado da propriedade privada
    updateState(newState) {

        this.state = { ...newState };
    }
    // Método para obter o estado da propriedade privada
    getState() {
        return this.state;
    }
}


const singletonInstance = new Singleton();

// Criamos e exportamos a uma instância única
export default singletonInstance;

