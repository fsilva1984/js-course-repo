


// Padrão singleton usando uma factory function
const Singleton = (function () {
    let instance;

    function createInstance() {
        // Sua lógica de inicialização aqui
        return {
            // Métodos e propriedades públicos aqui
            someMethod: function () {
                console.log("Método chamado dentro do singleton");
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Exemplo de uso:
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Saída: true

singletonInstance1.someMethod(); // Saída: Método chamado dentro do singleton
singletonInstance2.someMethod();
/*
Neste exemplo, a função externa retorna um objeto que expõe um método getInstance, que é usado para acessar a única instância do Singleton.A instância é criada apenas quando o método getInstance é chamado pela primeira vez.Todas as chamadas subsequentes a getInstance retornam a mesma instância, garantindo que haja apenas uma instância da classe Singleton em toda a execução do programa.

*/